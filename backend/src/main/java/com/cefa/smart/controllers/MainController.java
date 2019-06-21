package com.cefa.smart.controllers;

import com.cefa.smart.dao.UserRepository;
import com.cefa.smart.domain.User;
import com.cefa.smart.services.GeneratorJWT;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/json")
@CrossOrigin(origins = "*")
public class MainController {
    private Logger logger = LoggerFactory.getLogger(MainController.class);
    private final UserRepository userRepository;
    private final GeneratorJWT generatorJWT;

    @Autowired
    public MainController(final UserRepository userRepository) {
        this.userRepository = userRepository;
        this.generatorJWT = new GeneratorJWT();
    }

    @GetMapping
    public String home() {
        return "HELLO IRYNA";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/users")
    public ResponseEntity getAllUsers() {
        List<User> result = userRepository.findAll();
        return ResponseEntity.ok(result);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public ResponseEntity<?> addNewUser(@RequestBody String groupJson) throws JSONException {
        JSONObject user = new JSONObject(groupJson);
        HttpHeaders headers = new HttpHeaders();
        try {
            logger.info("Added new user " + user.get("firstName").toString());
            userRepository.insertUser(user.get("firstName").toString(), user.get("lastName").toString(),
                    user.get("email").toString(), user.get("password").toString(), user.get("phone").toString(),
                    (boolean) user.get("subscribe"));
            User newUser = userRepository.findUserByEmail(user.get("email").toString());
            return new ResponseEntity<>(newUser, headers, HttpStatus.OK);
        } catch (Exception e) {
            logger.info(e.getMessage());
            return new ResponseEntity<String>(headers, HttpStatus.FAILED_DEPENDENCY);
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/users/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody String groupJson) throws JSONException {
        JSONObject user = new JSONObject(groupJson);
        HttpHeaders headers = new HttpHeaders();
        try {
            logger.info("Check auth of user " + user.get("email").toString());
            User user_db = userRepository.findUserByEmail(user.get("email").toString());
            if (user_db.getPassword().equals(user.get("password").toString())){
                user_db.setPassword("secret");
                String token = generatorJWT.createJWT();
                if(token != null) {
                    user_db.setToken(token);
                }
                return new ResponseEntity<>(user_db, headers, HttpStatus.OK);
            }else {
                logger.info("Failed auth");
                return new ResponseEntity<String>(headers, HttpStatus.FAILED_DEPENDENCY);
            }
        } catch (Exception e) {
            logger.info(e.getMessage());
            return new ResponseEntity<String>(headers, HttpStatus.FAILED_DEPENDENCY);
        }
    }
}

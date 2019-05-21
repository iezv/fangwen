package com.cefa.smart.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2/json")
@CrossOrigin(origins = "*")
public class MainController {

    @GetMapping
    public String home() {
        return "HELLO IRYNA";
    }
}

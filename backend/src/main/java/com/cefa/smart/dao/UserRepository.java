package com.cefa.smart.dao;

import com.cefa.smart.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface UserRepository extends JpaRepository<User, Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO t_user (first_name, last_name, email, password, phone, is_subscribe) VALUES " +
            "( :first_name , :last_name , :email , :password , :phone , :subscribe ) ; ", nativeQuery = true)
    void insertUser(
            @Param("first_name") final String firstName,
            @Param("last_name") final String lastName,
            @Param("email") final String email,
            @Param("password") final String password,
            @Param("phone") final String phone,
            @Param("subscribe") final boolean subscribe);

    @Query(value = "SELECT * FROM t_user WHERE email = :email ", nativeQuery = true)
    User findUserByEmail(
            @Param("email")final String email);
}

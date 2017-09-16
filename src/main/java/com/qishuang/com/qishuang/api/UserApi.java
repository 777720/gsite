package com.qishuang.com.qishuang.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by geek720 on 2017/9/10.
 */
@RestController
@RequestMapping("/api/user")
public class UserApi {
    @GetMapping("/user/{userid}")
    public void getUser(@PathVariable String userid) {
    }
}

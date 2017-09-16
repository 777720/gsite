package com.qishuang.com.qishuang.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by geek720 on 2017/9/10.
 */
@RestController
public class HealthApi {
    @RequestMapping("/health")
    public String health() {
        return "hello Word";
    }
}

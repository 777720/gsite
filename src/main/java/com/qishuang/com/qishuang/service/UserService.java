package com.qishuang.com.qishuang.service;

import com.qishuang.com.qishuang.domain.User;

import java.util.List;

/**
 * Created by geek720 on 2017/9/10.
 */
public interface UserService {
    User getOneUser(String id);
    User getUserByName(String name);
    List<User> getAllUser();
    void insert(User user);

}

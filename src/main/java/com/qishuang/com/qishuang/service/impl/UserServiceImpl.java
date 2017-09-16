package com.qishuang.com.qishuang.service.impl;

import com.qishuang.com.qishuang.common.ValidParamsException;
import com.qishuang.com.qishuang.domain.User;
import com.qishuang.com.qishuang.domain.repository.UserRepository;
import com.qishuang.com.qishuang.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by geek720 on 2017/9/10.
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getOneUser(String id) {
        return userRepository.findOne(id);
    }

    @Override
    public User getUserByName(String name) {
        return userRepository.findUserByName(name);

    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public void insert(User user) {
        if(user.getName() == null || user.getId() == null) {
            throw new ValidParamsException();
        }
        userRepository.insert(user);
    }
}

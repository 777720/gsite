package com.qishuang.com.qishuang.domain.repository;

import com.qishuang.com.qishuang.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

/**
 * Created by geek720 on 2017/9/10.
 */
public interface UserRepository extends MongoRepository<User, String> {
    @Query("{'name': ?0}")
    User findUserByName(String name);
}

package com.quan.service;

import com.quan.dao.UserMapper;
import com.quan.pojo.User;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * @ClassName: TestService
 * @Description:
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 10:43
 */
@Service
public class TestService {
    @Autowired
    @Qualifier("userMapper")
    private UserMapper userMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public User loginCheck(String userName, String password) {
        return userMapper.loginCheck(userName, password);
    }

    @Test
    public void test02() {
        User user = userMapper.loginCheck("Hilda", "123456");
        if (user == null) {
            System.out.println("null");
        }
        else System.out.println(user);
    }
}

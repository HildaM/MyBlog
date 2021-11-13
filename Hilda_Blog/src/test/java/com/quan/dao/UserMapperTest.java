package com.quan.dao;

import com.quan.pojo.User;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;

import static org.junit.jupiter.api.Assertions.*;

@Controller
class UserMapperTest {
    private UserMapper userMapper;

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Test
    public void test01() {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserMapper userMapper = context.getBean("userMapper", UserMapper.class);
        User user = userMapper.loginCheck("Hilda", "123456");
        System.out.println(user);
    }

    @Test
    public void test02() {
        User user = userMapper.loginCheck("Hilda", "123456");
        System.out.println(user);
    }
}
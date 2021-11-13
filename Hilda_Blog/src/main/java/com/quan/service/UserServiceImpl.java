package com.quan.service;

import com.quan.dao.UserMapper;
import com.quan.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * @ClassName: UserServiceImpl
 * @Description: 登录服务
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 14:53
 */

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    @Qualifier("userMapper")
    private UserMapper userMapper;

    public UserMapper getUserMapper() {
        return userMapper;
    }

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    // 登录验证
    @Override
    public User loginCheck(String userName, String password) {
        // 对传进来的参数进行业务判断
        // ...........

        // 返回结果
        return userMapper.loginCheck(userName, password);
    }


    // 根据用户名查找用户
    @Override
    public User selectUserByName(String userName) {
        if (userName != null && userName.length() > 0) {
            return userMapper.selectUserByName(userName);
        }
        else return null;
    }

    // 根据密码查找用户
    @Override
    public User selectUserByPassword(String password) {
        if (password != null && password.length() > 0) {
            return userMapper.selectUserByPassword(password);
        }
        else return null;
    }

    // 根据邮箱查找
    @Override
    public User selectUserByEmail(String email) {
        if (email != null && email.length() > 0) {
            return userMapper.selectUserByEmail(email);
        }
        else return null;
    }

    // 统计用户数量
    @Override
    public int countUsers() {
        return userMapper.countUsers();
    }

    // 添加用户
    @Override
    public int updateUser(User user) {
        if (user != null) {
            return userMapper.updateUser(user);
        }
        return 0;
    }
}

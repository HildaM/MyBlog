package com.quan.service;

import com.quan.pojo.User;
import org.apache.ibatis.annotations.Param;

/**
 * @ClassName: UserService
 * @Description: userService 接口
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 14:57
 */
public interface UserService {
    // 登录验证
    public User loginCheck(String userName, String password);

    // 根据用户名查找用户
    public User selectUserByName(String userName);

    // 根据密码查找
    public User selectUserByPassword(String password);

    // 根据邮箱查找
    public User selectUserByEmail(String email);

    // 统计用户数量
    public int countUsers();

    // 添加用户
    public int updateUser(User user);
}

package com.quan.dao;

import com.quan.pojo.User;
import org.apache.ibatis.annotations.Param;

/**
 * @ClassName: LoginMapper
 * @Description: 登录验证模块
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 9:33
 */
public interface UserMapper {
    // 登录验证
    public User loginCheck(@Param("userName") String userName, @Param("password") String password);

    // 根据用户名查找
    public User selectUserByName(@Param("userName") String userName);

    // 根据密码查找
    public User selectUserByPassword(@Param("password") String password);

    // 根据邮箱查找
    public User selectUserByEmail(@Param("email") String email);

    // 统计用户数量
    public int countUsers();

    // 添加用户
    public int updateUser(User user);
}

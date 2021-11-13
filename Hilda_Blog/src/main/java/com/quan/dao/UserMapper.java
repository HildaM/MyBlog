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
}

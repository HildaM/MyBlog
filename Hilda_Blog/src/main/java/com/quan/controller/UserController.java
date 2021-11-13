package com.quan.controller;

import com.quan.pojo.User;
import com.quan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

/**
 * @ClassName: UserController
 * @Description: 登录控制器
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 14:52
 */

@RestController
public class UserController {
    @Autowired
    @Qualifier("userServiceImpl")
    private UserService userService;


    // 用户登录
    @PostMapping("/login")
    // HttpServletRequest req, HttpServletResponse resp
    public void login(String userName, String password, HttpServletResponse resp) throws Exception {
        // 验证密码
        User user = userService.loginCheck(userName, password);

        // 判断
        if (user != null) {
            resp.sendRedirect("/index.html");
        }
        else {
            resp.sendRedirect("/logInPage.html");
        }
    }


    // 根据用户名或密码查找用户
    @PostMapping("/selectUserByNameOrPassword")
    public String selectUserByNameOrPassword(String userName, String password) {
        String msg = "";

        if (userName != null && userName.length() > 0) {
            User user = userService.selectUserByName(userName);
            if (user != null) msg = "正确√";
            else msg = "此用户不存在，请注册！";
            return msg;
        }

        if (password != null && password.length() > 0) {
            User user = userService.selectUserByPassword(password);
            if (user != null) msg = "正确√";
            else msg = "密码错误！";
            return msg;
        }

        return msg;
    }
}

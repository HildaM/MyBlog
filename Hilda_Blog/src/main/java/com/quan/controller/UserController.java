package com.quan.controller;

import com.quan.pojo.User;
import com.quan.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;


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
    @PostMapping("/login.do")
    // HttpServletRequest req, HttpServletResponse resp
    public String login(String userName, String password, HttpSession session) throws Exception {
        // 验证密码
        User user = userService.loginCheck(userName, password);

        // 判断
        if (user != null) {
            // 登录成功后，向session写入用户信息
            session.setAttribute("user", userName);
            return "success";
        }
        else {
            return "failure";
        }
    }


    // 根据用户名或密码或email查找用户
    @PostMapping("/selectUser.do")
    public String selectUserByNameOrPassword(String userName, String password, String email) {
        String msg = "";

        if (userName != null && userName.length() > 0) {
            User user = userService.selectUserByName(userName);
            if (user != null) msg = "userName exist";
            else msg = "userName isn't exist";
            return msg;
        }

        if (password != null && password.length() > 0) {
            User user = userService.selectUserByPassword(password);
            if (user != null) msg = "password exist";
            else msg = "password isn't exist";
            return msg;
        }

        if (email != null && email.length() > 0) {
            User user = userService.selectUserByEmail(email);
            if (user != null) msg = "email exist";
            else msg = "email isn't exist";
            return msg;
        }

        return msg;
    }


    // 添加用户
    @PostMapping("/addUser.do")
    public String addUser(User user) {
        String msg = "failure";

        // 先统计用户的数量
//        Integer userCounts = userService.countUsers();
//        if (userCounts > 0) {
//            user.setUserID(userCounts + 1);
//        }

        if (user != null) {
            if (userService.updateUser(user) > 0) msg = "success";
        }

        // 立即刷新当前网页，可以使用js实现！！！
//        resp.setHeader("refresh", "3");
        // resp.sendRedirect("/logInPage.html");

        return msg;
    }
}

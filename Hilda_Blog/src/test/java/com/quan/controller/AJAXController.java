package com.quan.controller;

import com.quan.pojo.User;
import com.quan.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName: AJAXController
 * @Description:
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/11 15:14
 */

@RestController
public class AJAXController {
    @Autowired
    private TestService testService;

    public void setTestService(TestService testService) {
        this.testService = testService;
    }

    @RequestMapping("/ajax")
    // 传过来的参数叫 name，用 response 响应数据
    public void AJAXTest(String name, HttpServletResponse response) throws Exception {
        if ("quan".equals(name)){
            response.getWriter().print("true");
        }else{
            response.getWriter().print("false");
        }
    }

    @RequestMapping("/login")
    public void loginTest(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        User user = testService.loginCheck("Hilda", "123456");
        System.out.println(user);
    }
}

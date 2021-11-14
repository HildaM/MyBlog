package com.quan.config;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @ClassName: LoginInterceptor
 * @Description: 登录拦截器
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/14 15:04
 */
public class LoginInterceptor implements HandlerInterceptor {
    // 处理请求前
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 如果当前请求包含”login“，放行
        if (request.getRequestURI().contains("login")) {
            return true;
        }

        // 对其他页面进行拦截处理
        HttpSession session = request.getSession();
        if (session.getAttribute("user") != null) {
            // 如果当前页面存在登录信息，就放行
            return true;
        }

        // 未登录状态，跳转到登录页面上，并弹出提示框
        // 中文会出现乱码。不知道怎么解决？
        response.getWriter().print("<script language='javascript' charset='UTF-8'>alert('You shall go back to login in your account!'); window.location.href = '/logInPage.html';</script>");

        // 拦截
        return false;
    }

    // 处理请求后
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    // 完成请求后的清理工作
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}

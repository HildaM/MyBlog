package com.quan.dao;

import com.quan.pojo.User;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;

/**
 * @ClassName: UserMapperImpl
 * @Description:
 * @author: Hilda   Hilda_quan@163.com
 * @date: 2021/11/13 10:25
 */
public class UserMapperImpl extends SqlSessionDaoSupport implements UserMapper {
    @Override
    public User loginCheck(String userName, String password) {
        SqlSession sqlSession = getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.loginCheck(userName, password);
        return user;
    }
}

/**
 *  author      : t1ng
 *  createTime  : 2019/2/2
 *  description :
 */

import Router from 'koa-router';
import Redis from 'koa-redis';
import Passport from '../config/passport' ;
import axios from '../config/axios';

import util from '../util.js';
import config from '../config/config';

import userDAO from '../DAO/userDbUtil'

let router = new Router({
  prefix: '/users'
})

let Store = new Redis().client;

router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username,
    email = ctx.request.body.email;
  const saveExpire = await Store.hget(`nodemail:${email}`, 'expire');
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求过于频繁，一分钟一次'
    }
    return false;
  }
  let code = config.code()
  let subject = "t1ngt1ng's steam code";
  let html = `邀请码是${code}`;
  console.log(code)
  let res = await util.sendMailToSuperAdmin({
    email, subject, html
  })
  if (res.success) {
    Store.hmset(`nodemail:${username}`, 'code', code, 'expire', config.expire(), 'email', email);
    ctx.body = {
      code: 0,
      msg: '验证码已发，有效期一分钟'
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '发送验证码错误'
    }
  }

})


router.post('/register', async (ctx, next) => {
  const {username, password, email, code} = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code');
    const saveExprie = await Store.hget(`nodemail:${username}`, 'expire');

    if (code === saveCode) {
      if (new Date().getTime() - saveExprie > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新获取'
        }
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  let user = await userDAO.findUserByCon({username});
  console.log(user)
  if (user) {
    ctx.body = {
      code: -1,
      msg: '用户名已被注册'
    }
    return;
  }
  let nuser = await userDAO.addUser({username, password, email});

  if (nuser) {
    let res = await axios.post('/users/signin', {
      username, password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        console.log(111)
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

router.get('/getUser', async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    const {username, email} = ctx.session.passport.user;
    console.log(username, email)
    ctx.body = {
      username,
      email
    }
  } else {
    ctx.body = {
      username: '',
      email: ''
    }
  }
})


export default router;

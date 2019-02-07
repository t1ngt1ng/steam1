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

import cartDAO from '../DAO/cartUtil'

let router = new Router({
  prefix: '/cart'
})

let Store = new Redis().client;

router.get('/create', async (ctx, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
  } else {
    let time = Date();
    let cartNo = md5(Math.random() * 1000 + time).toString();
    let {params: {id, detail}} = ctx.request.body;
    let res = await cartDAO.createCart(id, cartNo, time, detail)
    if (res) {
      ctx.body = {
        code: 0,
        msg: "",
        id: cartNo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'fail'
      }
    }
  }
})


export default router;

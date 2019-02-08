/**
 *  author      : t1ng
 *  createTime  : 2019/2/2
 *  description :
 */

import Router from 'koa-router';
import Redis from 'koa-redis';
import axios from '../config/axios';
import md5 from 'crypto-js/md5';

import cartDAO from '../DAO/cartUtil'

let router = new Router({
  prefix: '/cart'
})

let Store = new Redis().client;

router.post('/create', async (ctx, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
  } else {
    let time = Date();
    let cartNo = md5(Math.random() * 1000 + time).toString();
    console.log(cartNo)
    let {params: {id, info}} = ctx.request.body;
    console.log(info)
    let details = []
    details.push(info)
    let res = await cartDAO.createCart(id, cartNo, time, details, ctx.session.passport.user)

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


router.post('/getCart', async (ctx, next) => {
  console.log(4444444)
  let {id} = ctx.request.body;
  try {
    let res = await cartDAO.getCart(id);
    ctx.body = {
      code: 0,
      data: res ? res.detail[0] : {}
    }
  }
  catch (e) {
    console.log(e)
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})

export default router;

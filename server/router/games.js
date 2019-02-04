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

import gameDAO from '../DAO/gameUtil'

let router = new Router({
  prefix: '/game'
})

let Store = new Redis().client;

router.get('/getGames', async (ctx, next) => {
  console.log('22222')
  let res = await gameDAO.getGames();
  if (res) {
    ctx.body = {
      gameList: res
    }
  } else {
    ctx.body = {
      gameList: ''
    }
  }
})

router.get('/gameDetail', async (ctx, next) => {
  let id = ctx.query.id;
  let res = await gameDAO.getDetail(id);
  if (res) {
    ctx.body = {
      data: res
  }
  }
})


export default router;

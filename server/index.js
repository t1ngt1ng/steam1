// const Koa = require('koa')
import Koa from 'koa';

import mongoose from './config/mongose';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import json from 'koa-json';//美观，输出格式
import passport from './config/passport';
import Redis from 'koa-redis';


import users from './router/users';
import games from './router/games';
import cart from './router/cart';

const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


app.keys = ['steam', 'steamkeys'];

app.proxy = true;
app.use(session({
  key: 'steam',
  prefix: 'steam:uid', store: new Redis()
}))

app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))

app.use(json())

mongoose();

app.use(passport.initialize());
app.use(passport.session());

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(users.routes()).use(users.allowedMethods())
  app.use(games.routes()).use(games.allowedMethods())
  app.use(cart.routes()).use(cart.allowedMethods())


  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()

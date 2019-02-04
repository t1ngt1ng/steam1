/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */

import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import UserDAO from '../DAO/userDbUtil';


passport.use(new LocalStrategy(async function (username, password, done) {
  let result = await UserDAO.findUserByCon({username});

  if (result != null) {
    if (result.password === password) {
      return done(null, result);
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  return done(null, user)
})

export default passport;

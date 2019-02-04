/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */

import mongoose from 'mongoose';
import User from '../models/users';
import Game from '../models/games'


export default function () {
  const db = mongoose.connect('mongodb://127.0.0.1:27017/steam', {
    useNewUrlParser: true
  }, function (err) {
    if (err) {
      console.log('Connection Error:' + err)
    } else {
      console.log('Connection success!')
    }
  });
  User;
  Game;

  return db;
}

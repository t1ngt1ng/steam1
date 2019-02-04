/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */
import mongoose from 'mongoose';

const User = mongoose.model('User');


export default {
  findUserByCon: async (con) => {
    return await User.findOne(con)
  },
  addUser: async (user) => {
    return await User.create(user)
  }
}

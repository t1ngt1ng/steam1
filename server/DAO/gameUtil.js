/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */
import mongoose from 'mongoose';

const Game = mongoose.model('Game');


export default {
  getGames: async () => {
    return await Game.find()
  },
  getDetail: async (id) => {
    return await Game.findOne({_id: id})
  }
}

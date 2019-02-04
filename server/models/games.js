/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: true
  },
  imgUrl: String,
  platform: Array,
  tags: Array,
  discount: Number,
  createTime: String,
  price: Number,
  reviewCount: Number,
  slidePic: Object
})

export default mongoose.model('Game', GameSchema);

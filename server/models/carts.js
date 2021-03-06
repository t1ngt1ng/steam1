/**
 *  author      : t1ng
 *  createTime  : 2019/2/1
 *  description :
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  pid: {
    type: String,
    require: true
  },
  detail: {
    type: Array,
    require: true
  },
  cartNo: {
    type: String,
    require: true
  },
  user: {
    type: String,
    require: true
  },
  time: {
    type: String,
    require: true
  }
})

export default mongoose.model('Cart', CartSchema);

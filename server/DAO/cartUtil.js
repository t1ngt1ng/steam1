/**
 *  author      : t1ng
 *  createTime  : 2019/2/7
 *  description :
 */
import mongoose from 'mongoose';

const Cart = mongoose.model('Cart');


export default {
  createCart: async (pid, cartNo, time, detail, user) => {
    let cart = new Cart({pid, cartNo, time, detail, user});
    return await cart.save()
  },
  getCart: async (id) => {
    return await Cart.findOne({cartNo: id})
  }
}

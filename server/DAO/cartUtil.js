/**
 *  author      : t1ng
 *  createTime  : 2019/2/7
 *  description :
 */
import mongoose from 'mongoose';

const Cart = mongoose.model('Cart');


export default {
  createCart: async (id, cartNo, time, detail,
                     user = ctx.session.passport.user) => {
    let cart = new Cart(id, cartNo, time, user, detail);

    return await Cart.save()
  }
}

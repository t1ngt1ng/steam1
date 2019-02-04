/**
 *  author      : t1ng
 *  createTime  : 2019/2/2
 *  description :
 */

import axios from 'axios';

let instance = axios.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 5000,
  headers: {}
})

export default instance;


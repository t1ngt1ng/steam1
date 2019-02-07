<template>
  <div class="single-con">
    <el-row>
      <el-col :span="16">
        <slide
          :list="detail.slidePic"
          width="616px"/>
      </el-col>
      <el-col :span="5">
        <div style="width: 324px;margin-left: -11px">
          <img
            :src="detail.slidePic.titlePic"
            class="game_title_img">
          <div class="game_description_snippet">
            Overcooked 回来了，带着全新的烹饪行动！重返洋葱王国，通过经典的本地合作模式或是在线游戏模式组建多达四人的大厨团队。
          </div>
          <div class="game-info-title">最近评测：<span class="game-info-content">多半好评</span></div>
          <div class="game-info-title">全部评测：<span class="game-info-content">特别好评</span></div>
          <br>
          <div class="game-info-title">发行日期：<span>{{ detail.createTime }}</span></div>
          <div class="game-info-title">开发商：<span
            class="game-info-content">Ghost Town Games Ltd., Team17 Digital Ltd</span></div>
          <div class="game-info-title">开发商：<span class="game-info-content">Team17 Digital Ltd</span></div>
          <div class="game-info-title">该产品的热门用户自定义标签：</div>
          <div>
            <a
              v-for="(item,idx) in detail.tags"
              :key="idx"
              class="app_tag">{{ item }}</a>
            <div class="app_tag add_button">+</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row style="margin-top: 30px">
      <el-col
        :span="15"
        class="game_purchase">
        <h1 style="display: inline-block;color:#fff">购买{{ detail.title }}</h1>
        <div style="float: right">
          <span
            v-for="(item1,idx) in detail.platform"
            :key="idx"
            :class="['platform-img',item1]"/>
        </div>

        <div class="game_purchase_price">
          <div class="game_purchase_bg">
            <span class="game_price">¥ {{ detail.price }}</span>
            <div class="btn_addtocart"><a
              href="#"
              @click="createCart"><span>添加至购物车</span></a></div>
          </div>
        </div>

      </el-col>
      <el-col :span="6">
        <div class="responsive_apppage_details_right">您对这款游戏感兴趣吗？</div>
      </el-col>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  import Slide from '../components/detail/slide.vue';

  export default {
    components: {
      Slide
    },
    data() {
      return {
//        detail: {}
      }
    },
    async asyncData(ctx) {
      let id = ctx.query.id;
      let {status, data: {data}} = await ctx.$axios.get('/game/gameDetail', {
        params: {
          id
        }
      })
      return {detail: data};
    },
    methods: {
      async createCart(e) {
        e.preventDefault();

        let {status, data: {code, id}} = await this.$axios.post('/cart/create', {
          params: {
            id: this.detail._id,
            detail:{
              name:this.detail
            }
      }
      })
      }
    }
  }

</script>
<style>
  @import "../assets/detail/index.css";
</style>

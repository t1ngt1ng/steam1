<template>
  <div style="width:940px;margin:0 auto">
    <v-bar/>
    <el-row>
      <h2 class="pageHeader"> 您的购物车</h2>
    </el-row>
    <el-col :span="16">
      <el-row class="cart-list">
        <el-col :span="5">
          <img
            :src="info.slidePic.titlePic"
            class="cart-list-img">
        </el-col>
        <el-col
          :span="19"
          class="cart-list-right">
          <span class="cart-list-title"> {{ info.title }}</span>
          <div class="cart-list-price">
            <span>
              ¥ {{ info.discount ? newPrice(info.price, info.discount) : info.price }}
            </span>
            <br>
            <a
              href="#"
              class="cart-list-remove">移除</a>
          </div>
          <span
            v-for="item in info.platform"
            :key="item"
            class="cart-platform-img">
            <span :class="['platform-img',item]"/>
          </span>
        </el-col>
      </el-row>
      <el-row class="cart-total">
        <div class="cart-list-total">
          预计总额：
          ¥ {{ info.discount ? newPrice(info.price, info.discount) : info.price }}
        </div>
        <div style="clear: both"/>
        <div class="rule"/>
        <div style="color:#ffcc6a;font-size:13px">
          <span>
            1 &nbsp;所有的价格均已包含增值税（如适用）
          </span>
        </div>
        <br>
        <div style="padding-bottom: 15px;color:#c6d4df">
          为自己购买还是作为礼物购买？ 选择一项以继续付款。
        </div>

        <div style="clear: both"/>
        <div style="text-align: right">
          <div class="btn_addtocart"><a href=""><span>为自己购买</span></a></div>
          <div class="btn_addtocart"><a href=""><span>作为礼物购买</span></a></div>
        </div>
      </el-row>
    </el-col>
    <el-col :span="6">
      为您推荐
    </el-col>

  </div>
</template>

<script type="text/ecmascript-6">
  import vBar from '../components/content/bar.vue'

  export default {
    components: {
      vBar
    },
    props: {
      info: {
        type: Object,
        default() {
          return {
            "title": "Overcooked!2",
            "imgUrl": "https://media.st.dl.bscstorage.net/steam/apps/728880/capsule_184x69_alt_assets_2.jpg?t=1547726640",
            "platform": [
              "win",
              "mac",
              "steam"
            ],
            "tags": [
              "多人",
              "在线合作",
              "独立",
              "休闲"
            ],
            "slidePic": {
              "titlePic": "https://media.st.dl.bscstorage.net/steam/apps/728880/header_schinese.jpg?t=1547726640",
              "bigImg": "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_d11e36791d7c5bf5dc980bc189b3f50b53657b51.600x338.jpg?t=1547726640",
              "pics": [
                "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_4ad737de5e5439217ce0f0d9bd381fe0e251b87a.116x65.jpg?t=1547726640",
                "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_d11e36791d7c5bf5dc980bc189b3f50b53657b51.116x65.jpg?t=1547726640",
                "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_a78767be5e9f3fb714721f0ab16c173cf9d78f2f.116x65.jpg?t=1547726640",
                "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_bec2afe4b53d2dbb08119be5a7fbf1b0df3d705f.116x65.jpg?t=1547726640",
                "https://media.st.dl.bscstorage.net/steam/apps/728880/ss_088a00e30b0671f4f3a0406651983ad9d05512d7.116x65.jpg?t=1547726640"
              ]
            },
            "price": 90,
            "createTime": "2019年1月1日",
            "reviewCount": 2
          }
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      newPrice() {
        return function (price, discount) {
          console.log(11, price, discount)
          if (!discount) return price;
          console.log(price, discount, Math.round(price - (price * discount / 100)))
          return Math.round(price - (price * discount / 100));

        }
      }
    }
  }

</script>

<style>
  @import "../assets/cart.css";
  @import "../assets/detail/index.css";

</style>

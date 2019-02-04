<template>
  <el-carousel
    indicator-position="outside"
    arrow="always"
    height="400"
    width="940">
    <el-carousel-item
      v-for="(item,idx) in imageList"
      :key="idx">
      <el-row>
        <el-col
          :span="12"
          class="big-pic">
          <img :src="item.url">
        </el-col>
        <el-col
          :span="12"
          class="small-pic">
          <el-row>
            <el-col :span="12"><img :src="item.pic1"></el-col>
            <el-col :span="12"><img :src="item.pic2"></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><img :src="item.pic3"></el-col>
            <el-col :span="12"><img :src="item.pic4"></el-col>
          </el-row>
        </el-col>
        <el-col
          :span="24"
          class="sld-title">
          <div> {{ item.title }} <span class="sld-price">¥{{ item.price }}</span></div>
        </el-col>
      </el-row>
      <!--<h3>{{ item }}</h3>-->
    </el-carousel-item>
  </el-carousel>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        imageList: [
          {
            title: '热销游戏',
            price: 325,
            url: require('../assets/slide/pic1_616x353.jpg'),
            pic1: require('../assets/slide/pic1_1.jpg'),
            pic2: require('../assets/slide/pic1_2.jpg'),
            pic3: require('../assets/slide/pic1-3.jpg'),
            pic4: require('../assets/slide/pic1_4.jpg'),

          },
          {
            title: '为您推荐热门产品',
            price: 199,
            url: require('../assets/slide/pic2_616x353.jpg'),
            pic1: require('../assets/slide/pic2_1.jpg'),
            pic2: require('../assets/slide/pic2_2.jpg'),
            pic3: require('../assets/slide/pic2_3.jpg'),
            pic4: require('../assets/slide/pic2_4.jpg'),
          }

        ]
      }
    }
  }

</script>
<style>
  @import "../assets/slide.css";

</style>


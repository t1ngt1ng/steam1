<template>
  <div
    @mouseover="changeParent"
    @mouseout="changeNone">
    <nuxt-link :to="{path:'singlePage',query:{id:info['_id']}}">
      <el-row style="margin: 3px 0">
        <el-col :span="8">
          <img :src="info.imgUrl">
        </el-col>
        <el-col
          :span="16"
          class="game-content">
          <el-row>
            <el-col
              :span="15">
              <el-row
                class="game-item-text">
                <el-col
                  :span="24"
                  class="title">{{ info.title }}
                </el-col>
                <el-col :span="24">
                  <span
                    v-for="item in info.platform"
                    :key="item">
                    <span
                      :class="['platform-img',item]"/>
                  </span>
                </el-col>
                <el-col :span="24">
                  <span
                    v-for="(item1,idx) in info.tags"
                    :key="idx"
                    class="game-tag">
                    {{ item1 }}
                  </span>
                </el-col>
              </el-row>
            </el-col>
            <el-col
              :span="3"
              class="discount_block">
              <div class="discount-price">
                <div
                  v-if="info.discount"
                  class="discount_pct">
                  -{{ info.discount }}%
                </div>
                <div class="price-block">
                  <div
                    v-if="info.discount"
                    class="game-orignal-price">¥ {{ info.price }}
                  </div>
                  <div class="game-price">¥ {{ newPrice(info.price, info.discount) }} </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </nuxt-link>
    <slot/>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      newPrice() {
        return function (price, discount) {
          if (!discount) return price;
          return Math.round(price - (price * discount / 100));
        }
      }
    },
    methods: {
      changeParent() {
        this.$emit('changeItem', this.info, 'block')

      },
      changeNone() {
        this.$emit('changeItem', this.info, 'none')
      }
    }
  }

</script>

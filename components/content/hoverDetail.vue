<template>
  <div :style="styleObj">

    <div class="game-hover">
      <div class="hover-content">
        <h4>{{ info.title }}</h4>
        <div style="font-size: 10px">发布于：{{ info.createTime }}</div>
        <img :src="info.imgUrl">
        <div class="hover_review_summary">
          <div class="title">总体用户评测：</div>
          <span class="positive">好评如潮</span>
          （{{ info.reviewCount }} 篇评测）
        </div>
        <div style="margin-top: 6px">
          用户标签
          <div>
            <span
              v-for="(item,idx) in info.tags"
              :key="idx"
              class="hover-tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>

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
      },
      disvalue: {
        type: String,
        default() {
          return 'none'
        }
      }
    },
    data() {
      return {}
    },
    computed: {
      styleObj() {
        return {display: this.disvalue}
      }
    }
  }

</script>
<style>
  @import "../../assets/content/gameHover.css";
</style>

<template>
  <div id="tablist">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick">
      <el-tab-pane
        label="新品与热门商品"
        name="first">

        <game-item
          v-for="(item,idx) in hotList"
          :key="idx"
          :info="item"
          @changeItem="changeCurrentItem"/>

      </el-tab-pane>
      <el-tab-pane
        label="热销商品"
        name="second">配置管理
      </el-tab-pane>
      <el-tab-pane
        label="人们正在玩"
        name="third">角色管理
      </el-tab-pane>
      <el-tab-pane
        label="即将发行"
        name="fourth">定时任务补偿
      </el-tab-pane>
    </el-tabs>


    <hover-detail
      :info="currentItem"
      :disvalue="displayVal"
    />

  </div>
</template>

<script type="text/ecmascript-6">
  import GameItem from './gameItem.vue'
  import HoverDetail from './hoverDetail.vue'

  export default {
    components: {
      HoverDetail,
      GameItem
    },
    data() {
      return {
        currentItem: {},
        activeName: 'first',
        displayVal: 'none',
        hotList: []
      }
    },
    async mounted() {
      let {data: {gameList}} = await this.$axios.get('/game/getGames')
      this.hotList = gameList

    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      changeCurrentItem(val, display) {
        this.currentItem = val;
        this.displayVal = display
      }
    },

  }

</script>

<style lang="scss">
  @import "../../assets/content/gameList.scss";

</style>

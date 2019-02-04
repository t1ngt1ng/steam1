<template>
  <div>
    <div class="rightcol">
      <div class="rightlist">
        <h2>为什么加入 STEAM？</h2>
        <ul class="why-list">
          <li>购买和下载完整零售游戏</li>
          <li>加入 Steam 社区</li>
          <li>游戏时与好友聊天</li>
          <li>在任何电脑上都能玩</li>
          <li>安排游戏、比赛或 LAN 聚会</li>
          <li>获取自动游戏更新以及更多！</li>
        </ul>
        <br>
        <img
          src="https://store.st.dl.bscstorage.net/public/images/v6/why_join_preview.png"
          width="265"
          height="176"
          border="0">

        <div
          v-if="show"
          class="join-sys">
          <span>支持的操作系统</span>
          <p>Windows 7、8、8.1、10 或更新版本。</p>
          <p>Intel Mac、OS X 版本 10.11（El Capitan）或更新版本。</p>
          <p>Ubuntu Linux（最新版本）。</p>
          <p>互联网连接（推荐使用宽带）</p>
        </div>
      </div>
    </div>
    <br>
    <p class="why-foot">
      <a href="/"> <span class="left-bottom">了解更多Steam的相关信息</span></a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      show: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {}
    }
  }

</script>

<style lang="scss">
  @import "../../assets/account/whylist.scss";
</style>

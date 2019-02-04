<template>
  <div class="s-footer">
    <el-row class="footer-content">
      <el-col
        :span="24"
        class="border"/>
      <el-col :span="3">
        <img src="../../../assets/logo_valve_footer.png">
      </el-col>
      <el-col
        :span="18">
        <div class="footer-write">
          <div>©2019 Valve Corporation。保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。</div>
          <div>所有的价格均已包含增值税（如适用）。&nbsp;
            <a href="/">隐私政策</a>|
            <a href="/">法律信息</a>|
            <a href="/">Steam订户协议</a>|
            <a href="/">退款</a>
          </div>
        </div>
      </el-col>
      <el-col :span="3"><img
        style="float: right"
        src="../../../assets/logo_steam_footer.png"></el-col>
      <el-col
        :span="24"
        class="border"/>
      <ul class="contact">
        <li><a href="/">关于Value</a></li>
        <li><a href="/">Steamworks</a></li>
        <li><a href="/">工作</a></li>
        <li><a href="/">Steam分销</a></li>
        <li><a href="/">礼物卡</a></li>
        <li><img src="../../../assets/ico_facebook.gif"><a href="/">Steam</a></li>
        <li><img src="../../../assets/ico_twitter.gif"><a href="/">@steam_games</a></li>
      </ul>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    }
  }

</script>

<style>
  @import "../../../assets/footer.css";
</style>

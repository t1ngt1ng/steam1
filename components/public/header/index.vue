<template>
  <div class="s-header">
    <el-row class="content">
      <el-col
        :span="5"
        class="logo">
        <a href="/">
          <img
            src="../../../assets/globalheader_logo.png"
            width="176px"
            height="44px">
        </a>
      </el-col>
      <el-col
        :span="13">
        <center-bar/>
      </el-col>
      <el-col
        :span="5">
        <right-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  import CenterBar from './centerBar.vue';
  import RightBar from './rightBar.vue';

  export default {
    components: {
      CenterBar,
      RightBar
    }
  }

</script>

<style>
  @import "../../../assets/header/index.css";
</style>

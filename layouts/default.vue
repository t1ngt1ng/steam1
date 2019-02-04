<template>
  <div>
    <el-row>
      <el-col :span="24">
        <s-header height=""/>
      </el-col>
      <el-col :span="24">
        <nuxt height="100%"/>
      </el-col>
      <el-col
        :span="24">
        <s-footer height="100%"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import SHeader from '../components/public/header/index.vue';
  import SFooter from '../components/public/footer/index.vue';

  export default {
    components: {
      SHeader,
      SFooter
    }
  }
</script>

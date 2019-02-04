<template>
  <div>
    <div class="big-img">
      <img :src="list.bigImg">
    </div>
    <ul>
      <li
        v-for="(item,idx) in list.pics"
        :key="idx"
        class="img-block"
      >
        <img :src="item">
      </li>
    </ul>

  </div>
</template>t

<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Object,
        default() {
          return {}
        }
      }
    }
    ,
    data() {
      return {}
    }
  }

</script>
<style>

</style>

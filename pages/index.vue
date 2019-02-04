<template>
  <section class="container">
    <div style="padding-top:25px">
      <bar/>
    </div>

    <div style="width:940px;margin:0 auto;">
      <h3 style="color:white;margin-top:40px">精选和推荐</h3>
      <slide-show
        width="940"/>
    </div>

    <div style="width: 616px;height:100%">
      <game-list/>
    </div>
  </section>
</template>

<script>
  import SlideShow from '../components/slideShow.vue'
  import Bar from '../components/content/bar.vue'
  import GameList from '../components/content/gameList.vue'

  export default {
    components: {
      SlideShow,
      Bar,
      GameList
    }
  }
</script>

<style>
  .container {

    width:940px;
    margin: 0 auto;
  }
</style>

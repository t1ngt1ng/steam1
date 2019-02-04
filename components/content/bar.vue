<template>
  <div class="conbar-container">
    <ul class="nav con-bar">
      <li
        v-for="(item,idx) in barList"
        :key="idx">

        <nuxt-link to="/"> {{ item.title }}
          &nbsp;<i
            v-if="item.child"
            class="el-icon-caret-bottom"/></nuxt-link>
        <div v-if="item.child">
          <dl>

            <dd
              v-for="l in item.child"
              :key="l.title"
              :class="[l.isTitle?'inner-title':'' ]">
              <nuxt-link to="/">
                <span
                  :class="[l.other?'other-title':'']">
                  {{ l.name }}</span></nuxt-link>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
    <div style="float: right;position: relative">
      <div class="searchbox">
        <input
          type="text"
          placeholder="搜索商店"
          autocomplete="off"
          size="22"
          onfocus="this.placeholder=''"
          onblur="this.placeholder='搜索商店'"
          @mouseover="changeBorder"
          @blur="backBorder">
        <a
          id="store_search_link"
          href="#">
          <img src="../../assets/search_icon_btn.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        search: '',
        barList: [
          {
            title: '您的商店',
            child: [{
              name: '商店主页', isTitle: true
            }, {name: '最近看过的'}, {name: 'Steam鉴赏者'}, {name: '虚拟现实'}]
          },
          {
            title: '游戏',
            child: [
              {name: '商店主页', isTitle: true},
              {name: '免费游戏'}, {name: '抢先体验'}, {name: '试玩'}, {name: '虚拟现实'},
              {name: '持Steam 控制器'}, {name: 'Steam上的网吧游戏'},
              {name: '按类别浏览', isTitle: true, other: true},
              {name: '休闲'}, {name: '体育'}, {name: '冒险'}, {name: '动作'},
              {name: '大型多人在线'},
              {name: '模拟'},
              {name: '独立'},
              {name: '竞速'},
              {name: '角色扮演'},
              {name: '热门标签', isTitle: true},
              {name: '按平台游戏', other: true, isTitle: true},
              {name: 'Mac OS X'},
              {name: 'SteamOS+Linux'},
            ]
          }, {
            title: '软件',
            child: [
              {name: '软件中心', isTitle: true},
              {name: '动画制作和建模'},
              {name: '实用工具'},
              {name: '教育'},
              {name: '游戏开发'},
              {name: '图片编辑'},
              {name: '网络出版'},
              {name: '视频制作'},
              {name: '设计与插画'},
              {name: '音频制作'}
            ]
          }, {
            title: '硬件',
            child: [{name: 'Steam控制器'}, {name: 'Steam流式盒'}, {name: 'HTC Vive'}]
          }, {
            title: '视频',
            child: [
              {name: '视频中心', isTitle: true},
              {name: '按类型浏览', other: true},
              {name: '电影'},
              {name: '剧集'},
              {name: '纪录片'},
              {name: '游戏'},
              {name: '教程'},
              {name: '短片'},
              {name: '按类型浏览', other: true},
              {name: '动作'},
              {name: '动漫'},
              {name: '喜剧'},
              {name: '剧情'},
              {name: '恐怖'},
              {name: '科幻'}
            ]
          },
          {title: '新闻'}

        ]
      }
    },
    methods: {
      changeBorder(e) {
//        console.log(e.target.parentNode)
        e.target.parentNode.style.borderColor = '#4c9acc';
      },
      backBorder(e){
        e.target.parentNode.style.borderColor = 'rgba(0, 0, 0, 0.3)';

      }
    }
  }

</script>
<style scoped>
  @import "../../assets/content/bar.css";

  .el-input__inner {
    height: 30px;
    background-color: #316282;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2)
  }

</style>

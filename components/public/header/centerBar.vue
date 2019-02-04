<template>
  <ul class="nav center-bar">
    <li
      v-for="(item,idx) in navList"
      :key="idx"
    >
      <nuxt-link
        to="/"
      > {{ item.title }}
      </nuxt-link>

      <dl
        v-if="item.child">
        <dd
          v-for="(child,idx) in item.child"
          :key="idx"
        >
          <nuxt-link to="/"> {{ child.title }}</nuxt-link>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navList: [
          {
            title: '商店',
            child: [{
              title: '精选',
              url: ''
            },
              {
                title: '探索',
                url: ''
              },
              {
                title: '鉴赏家',
                url: ''
              },
              {
                title: '愿望单',
                url: ''
              },
              {
                title: '新闻',
                url: ''
              },
              {
                title: '统计',
                url: ''
              }],
          },
          {
            title: "社区",
            child: [
              {
                title: '主页',
                url: ''
              },
              {
                title: '讨论',
                url: ''
              },
              {
                title: '创意工坊',
                url: ''
              },
              {
                title: '市场',
                url: ''
              },
              {
                title: '实况直播',
                url: ''
              }
            ]
          },
          {title: "关于"},
          {title: "客服"}
        ]
      }
    }
  }

</script>


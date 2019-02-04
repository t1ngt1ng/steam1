<template>
  <div class="right-nav">
    <ul class="nav right">
      <li
        class="btn-green">
        <a
          href="/"
          class="install"
        >安装steam</a>
      </li>
      <template v-if="user">
        <li class="top">
          {{ user }}
        </li>
      </template>
      <template v-else>
        <li class="top">
          <nuxt-link to="/login">登录</nuxt-link>
        </li>

      </template>


      <li class="top">
        | &nbsp;
        <span>语言<i class="el-icon-caret-bottom"/></span>

        <dl
          v-if="lang">
          <dd
            v-for="(item,idx) in lang"
            :key="idx">
            <nuxt-link to="/"> {{ item }}</nuxt-link>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import NuxtLink from "../../../.nuxt/components/nuxt-link";

  export default {
    components: {NuxtLink},
    data() {
      return {
        lang: [
          '繁體中文（繁体中文）',
          '日本語（日语）',
          '한국어（韩语）',
          'ไทย（泰语）',
          'English（英语）',
          '帮助我们翻译 Steam'],
        user: ''
      }
    },
    async mounted() {
      const {status, data: {username}} = await this.$axios.get('/users/getUser')
      console.log(username)
      if (status === 200) {
        this.user = username;
        console.log(this.user)
      }
    }

  }

</script>

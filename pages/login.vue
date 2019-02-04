<template>
  <div class="container">
    <div style="padding-top:25px">
      <bar/>
    </div>

    <el-row style="margin: 0 auto; width: 940px;margin-top:15px ">
      <el-col
        :span="16"
        class="leftcol">
        <el-row class="login-box">
          <el-col
            :span="11"
            class="login_content">
            <h2>登录</h2>
            <p>到现有的 Steam 账户</p>
            <h4
              v-if="error"
              class="tips"><i/>{{ error }}</h4>
            <el-form
              :model="form"
              label-width="80px"
              label-position="top">
              <el-form-item label="Steam账户名称">
                <el-input v-model="form.username"/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="form.password"/>
              </el-form-item>
              <div
                class="login-msg"
                title="如果您选中此选项，我们会在今后 30 天内自动为您登录，除非您在帐户菜单中选中“注销”。此功能只适用于启用 Steam 令牌的帐户。">
                <el-checkbox v-model="checked">在这台电脑上记住我</el-checkbox>
              </div>

              <el-button
                class="btn-login"
                size="mini"
                @click="login">登录
              </el-button>
            </el-form>
          </el-col>
          <el-col
            :span="1"
            class="loginbox_sep"/>
          <el-col :span="11">
            <div class="create-acc">
              <h2>创建</h2>
              <p>一个新的免费帐户</p>
              <p>
                欢迎免费加入及轻松使用。继续创建 Steam 帐户并获取 Steam - 适合 PC 和 Mac 玩家的前沿数字解决方案。</p>
            </div>
            <el-button
              class="btn-login"
              size="mini"
              @click="register">
              加入Steam
            </el-button>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <div class="lgoin-foot">
            <p>
              <a href="/"> <span>忘记您的密码？</span></a>
            </p>
          </div>
        </el-row>
      </el-col>
      <el-col :span="8">
        <why-list/>
      </el-col>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  import Bar from '../components/content/bar.vue'
  import WhyList from '../components/account/whyList.vue';
  import CryptoJs from 'crypto-js';

  export default {
    components: {
      Bar,
      WhyList
    },
    data() {
      return {
        error: '',
        checked: '',
        form: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        this.$axios.post('/users/signin', {
          username: this.form.username,
          password: CryptoJs.MD5(this.form.password).toString()
        }).then(({status, data}) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = '/';
            } else {
              this.error = data.msg;
            }
          } else {
            this.error = `服务器出错，状态码${status}`
          }
          setTimeout(() => {
            this.error = ""
          }, 1500)
        })
      },
      register() {
        location.href = '/register';
      }
    }


  }

</script>

<style lang="scss">
  @import "../assets/login.scss";
</style>

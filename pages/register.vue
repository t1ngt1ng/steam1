<template>
  <div class="container">
    <el-row class="register-title">创建帐户</el-row>
    <el-row class="register-content">
      <el-col
        :span="16"
        class="register-left">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rule="rules"
          label-position="top">
          <el-row>
            <el-col :span="9">
              <el-form-item
                label="用户名"
                prop="name">
                <el-input v-model="ruleForm.name"/>
              </el-form-item>
              <el-form-item
                label="您当前的电子邮件地址"
                prop="email">
                <el-input v-model="ruleForm.email"/>
              </el-form-item>
              <el-button
                size="mini"
                round
                @click="sendMsg">发送验证码
              </el-button>
            </el-col>
            <el-col
              :span="15"
              class="input-msg">
              <p>您的电子邮件地址用于确认购买并帮助您管理对 Steam 帐户的访问。
              </p>
              <p> Steam 将向此帐户发送一封用于确认的电子邮件。请通过邮件中的链接验证您的 Steam 电子邮件帐户。</p>

            </el-col>
          </el-row>


          <span class="status">{{ statusMsg }}</span>
          <el-form-item label="验证码">
            <el-input v-model="ruleForm.code"/>
          </el-form-item>
          <el-form-item label="您的居住地">
            <el-select
              v-model="ruleForm.region"
              placeholder="China">
              <el-option
                label="China"
                value="China"/>
              <el-option
                label="America"
                value="America"/>
              <el-option
                label="Japan"
                value="Japan"/>
            </el-select>
          </el-form-item>

          <el-form-item
            label="密码"
            prop="pwd">
            <el-input
              v-model="ruleForm.pwd"
              type="password"/>
          </el-form-item>
          <el-form-item
            label="确认密码"
            prop="cpwd">
            <el-input
              v-model="ruleForm.cpwd"
              type="password"/>
          </el-form-item>


          <p>请复查以上协议，并通过选择页面底部的复选框同意此协议。  您必须同意这些协议条款才能继续。</p>
          <div class="ssa_box">
            <h3>STEAM® SUBSCRIBER AGREEMENT</h3>
            <br>
            <p>
              <a name="0"/>Table of contents:
            </p>
            <ol style="margin-left: 13px;">
              <li><a href="#1">Registration as a subscriber; application of terms to you; your account</a></li>
              <li><a href="#2">Licences</a></li>
              <li><a href="#3">Billing, payment and other subscriptions</a></li>
              <li><a href="#4">Online conduct, cheating and illegal behavior</a></li>
              <li><a href="#5">Third party content</a></li>
              <li><a href="#6">User generated content</a></li>
              <li><a href="#7">Disclaimers; limitation of liability; no guarantees; limited warranty</a></li>
              <li><a href="#8">Amendments to this agreement</a></li>
              <li><a href="#9">Term and termination</a></li>
              <li><a href="#10">Applicable law/mediation/jurisdiction</a></li>
              <li><a href="#11">Dispute resolution/binding arbitration/class action waiver</a></li>
              <li><a href="#12">Miscellaneous</a></li>
            </ol>
            <p>
              This Steam Subscriber Agreement ("Agreement") is a legal document that explains your rights and obligations as a subscriber of Steam from Valve Corporation, a corporation under the laws of the State of Washington, with its registered office at 10400 NE 4th St., Bellevue, WA 98004, United States, registered with the Washington Secretary of State under number 60 22 90 773, VAT ID No. EU 8260 00671 (“Valve”). Please read it carefully.</p>
          </div>
          <div class="login-msg">
            <el-checkbox v-model="checked">我同意并且已年满 13 周岁</el-checkbox>
          </div>
          <div style="float:right;padding-right: 20px">
            <el-button
              class="btn-login"
              size="mini"
              @click="register()">注册
            </el-button>
          </div>
        </el-form>
      </el-col>
      <el-col :span="8">
        <why-list :show="show"/>
      </el-col>
    </el-row>


  </div>
</template>

<script type="text/ecmascript-6">
  import WhyList from '../components/account/whyList.vue'
  import CryptoJS from 'crypto-js';

  export default {
    components: {
      WhyList
    },
    data() {
      return {
        show: true,
        statusMsg: '',
        checked: '',
        ruleForm: {
          name: '',
          email: '',
          pwd: '',
          cpwd: '',
          region: '',
          code: ''
        },
        rules: {
          email: [{
            required: true, type: 'email', message: '请输入邮箱', trigger: 'blur'
          }],
          pwd: [{
            required: true, message: '创建密码', trigger: 'blur'
          }],
          cpwd: [{
            required: true, message: '确认密码', trigger: 'blur'
          }, {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
          ]
        }
      }
    },
    methods: {
      sendMsg() {
        if (this.timerid) {
          return false
        }

        this.$axios.post('/users/verify', {
          username: this.ruleForm.name,
          email: this.ruleForm.email
        })
          .then(({status, data}) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              this.statusMsg = `验证码已发送，剩余${count--}秒`;
              this.timerid = setInterval(() => {
                this.statusMsg = `验证码已发送，剩余${count--}秒`;
                if (count === 0) {
                  clearInterval(this.timerid);
                  this.statusMsg = "";
                }
              }, 1000)
            } else {
              this.statusMsg = data.msg;
            }
          })
      },
      register() {
        this.$axios.post('/users/register', {
          username: this.ruleForm.name,
          email: this.ruleForm.email,
          password: CryptoJS.MD5(this.ruleForm.pwd).toString(),
          code: this.ruleForm.code,
          region: this.ruleForm.region || 'China'
        }).then(({status, data}) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = '/login';
            } else {
              this.error = data.msg;
            }
          } else {
            this.error = `服务器出错:${status}`
          }
          setTimeout(() => {
            this.error = ''
          }, 1500)
        })
      }
    }
  }

</script>
<style lang="scss">
  @import "../assets/account/register.scss";
</style>

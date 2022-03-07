<template>
  <div class="login">
    <div class="login-container">
      <h2>登录</h2>
      <el-form :model="loginForm" :rules="loginRules">
        <el-form-item>
          <span class="login-container__svg">
            <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
          </span>
          <el-input
            type="text"
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <span class="login-container__svg">
            <el-icon><lock /></el-icon>
          </span>
          <el-input
            :type="passwordType"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
          <span class="login-container__svg" @click="onChangePwdType">
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
          </span>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="login-container__btn">登录</el-button>
    </div>
  </div>
</template>

<script setup>
import { Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { validatePassword } from './rules'

const loginForm = ref({
  username: 'aa',
  password: '11'
})

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

// 处理密码显示
const passwordType = ref('password')
function onChangePwdType() {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  background-color #2d3a4b
  flex-center()
  .login-container
    width 460px
    h2
      text-align center
      margin-bottom 50px
      font-size 24px
      color #fff
    .login-container__btn
      margin-top 20px
    .login-container__svg
      color #eee
      vertical-align middle
      display inline-block
</style>

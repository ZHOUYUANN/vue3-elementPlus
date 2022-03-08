<template>
  <div class="login">
    <div class="login-container">
      <h2>登录</h2>
      <el-form :model="loginForm" :rules="loginRules" ref="loginFromRef">
        <el-form-item prop="username">
          <span class="login-container__svg">
            <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
          </span>
          <el-input
            type="text"
            v-model="loginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="login-container__svg">
            <el-icon><lock /></el-icon>
          </span>
          <el-input
            :type="passwordType"
            :loading="loading"
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
      <<<<<<< HEAD <el-button type="primary" class="login-container__btn"
      @click="login" =======
      <el-button
        type="primary"
        class="login-container__btn"
        @click="handleLogin"
        >>>>>>> 2a4442784872faef8d827226db40dd65262fcc9a >登录</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { validatePassword } from './rules'

const loginForm = ref({
  username: 'aa',
  password: '123456'
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

const loginFromRef = ref(null)
const loading = ref(false)
const store = useStore()
const router = useRouter()
function handleLogin() {
  // 先校验数据
  loading.value = true
  loginFromRef.value.validate((valid) => {
    // 如果校验不通过就 返回
    if (!valid) return
    // 使用 vuex 加 localstorage 进行用户的保存处理，成功之后跳转页面
    store
      .dispatch('user/userlogin', loginForm.value)
      .then((res) => {
        loading.value = false
        router.push('/')
      })
      .catch((err) => {
        loading.value = false
        console.log(err)
      })
  })
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

<template>
  <div class="nav">
    <hamburger />
    <div class="avatar">
      <el-dropdown trigger="click">
        <div class="">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
          <el-icon><tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <a target="__blank" href="https://luszy.com">
              <el-dropdown-item>博客地址</el-dropdown-item>
            </a>
            <el-dropdown-item @click="userlogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Tools } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import Hamburger from '@/components/hamburger'

const store = useStore()

function userlogout() {
  store.dispatch('user/userlogout')
}
</script>

<style lang="stylus" scoped>
.nav
  width 100%
  height 60px
  line-height 60px
  padding 0 20px
  background-color #fff
  box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)
  box-sizing border-box
  display flex
  align-items center
  justify-content space-between
  .avatar
    /deep/.el-icon
      margin-left 5px
</style>

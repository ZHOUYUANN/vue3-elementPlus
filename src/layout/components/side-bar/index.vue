<template>
  <div class="side">
    <div class="logo">
      <el-avatar
        :size="44"
        shape="square"
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3835858067,383604916&fm=26&gp=0.jpg"
      ></el-avatar>
      <h1>哈哈</h1>
    </div>
    <side-menu></side-menu>
  </div>
</template>

<script setup>
import SideMenu from './side-menu'
</script>

<style lang="stylus" scoped>
.side
  width 240px
  height 100%
  background #545c64
  transition all .3s
  .logo
    height 60px
    display flex
    align-items center
    justify-content center
    h1
      font-size 16px
      margin-left 10px
      color #fff
      font-weight 500
</style>

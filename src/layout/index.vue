<template>
  <div class="layout">
    <!-- 左侧 menu -->
    <side-bar></side-bar>
    <div class="layout-container">
      <header>
        <nav-bar></nav-bar>
      </header>
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/nav-bar'
import SideBar from './components/side-bar'
import AppMain from './components/app-main'
</script>

<style lang="stylus" scoped>
.layout
  position relative
  width 100%
  height 100%
  display flex
  .layout-container
    flex 1
    header
      position fixed
      top 0
      right 0
      width calc(100% - 240px)
      z-index 9
</style>

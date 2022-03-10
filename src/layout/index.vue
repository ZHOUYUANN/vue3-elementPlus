<template>
  <div
    class="layout"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <side-bar class="side-container"></side-bar>
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
  transition all .3s
  .layout-container
    flex 1
    header
      position fixed
      top 0
      right 0
      width calc(100% - 240px)
      z-index 9
      transition all .3s
  &.openSidebar
    .side-container
      width 240px
    header
      width calc(100% - 240px)
  &.hideSidebar
    .side-container
      width 63px
    header
      width calc(100% - 63px)
</style>

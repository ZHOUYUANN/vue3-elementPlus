<template>
  <el-menu
    :default-active="activeMenu"
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <side-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></side-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideItem from './side-item'

const router = useRouter()

const routes = computed(() => {
  const res = filterRouters(router.getRoutes())
  console.log(generateMenus(res))
  return generateMenus(res)
})

const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="stylus" scoped></style>

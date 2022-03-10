<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <span>{{ route.meta.title }}</span>
    </template>
    <!-- 递归循环展示 -->
    <side-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></side-item>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    {{ route.meta.title }}
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="stylus" scoped></style>

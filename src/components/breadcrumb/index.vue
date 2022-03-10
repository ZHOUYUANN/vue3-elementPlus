<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.path"
    >
      <span>{{ breadcrumb.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbs = ref([])

function getBreadcrumbData() {
  breadcrumbs.value = route.matched.filter(
    (item) => item.meta.title && item.meta.icon
  )
}

// 监听路由的变化
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
</script>

<style lang="stylus" scoped>
.breadcrumb
  display inline-block
  font-size 14px
  line-height 50px
  margin-left 20px
</style>

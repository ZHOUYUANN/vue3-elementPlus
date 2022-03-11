<template>
  <div class="header-search">
    <el-select
      ref="searchSelectRef"
      class="search-select"
      v-model="search"
      filterable
      default-first-option
      placeholder
      remote
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import Fuse from 'fuse.js'

const router = useRouter()

const routes = computed(() => {
  const res = filterRouters(router.getRoutes())
  console.log(res)
  return generateMenus(res)
})
console.log(routes.value)

// function generateRoutes(routes) {
//   const res = []
//   routes.reduce((per, cur) => {
//     per.push()
//   }, [])

//   return res
// }
const fuse = new Fuse(routes.value, {
  shouldSort: true,
  minMatchCharLength: 1,
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3
    }
  ]
})

const search = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]

function querySearch(query) {
  console.log(fuse.search(query))
}

function onSelectChange() {
  // console.log(2)
}
</script>

<style lang="stylus" scoped></style>

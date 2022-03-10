<template>
  <div class="hamburger" @click="toggleClick">
    <svg-icon class="icon" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})

function toggleClick() {
  store.commit('app/triggerSidebarOpened')
}
</script>

<style lang="stylus" scoped>
.hamburger
  cursor pointer
  .icon
    width 30px
    height 30px
</style>

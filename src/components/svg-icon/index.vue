<template>
  <!-- 展示外部图标 -->
  <div
    v-if="flag"
    :style="outIconStyle"
    class="svg-external-icon svg-icon"
    :class="className"
  >
    1
  </div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="innerIconClass" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { isExternal } from '@/assets/js/utils'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

// 判读是否是加载的外部资源
const flag = computed(() => isExternal(props.icon))

const outIconStyle = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))

const innerIconClass = computed(() => `#icon-${props.icon}`)
</script>

<style lang="stylus" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

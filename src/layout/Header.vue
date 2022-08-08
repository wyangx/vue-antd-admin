<script setup lang='ts'>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'

import { useAppStore } from '../store/index.js'

const app = useAppStore()

// const collapsed = app.isCollapse
// console.log(collapsed)
</script>

<template>
  <MenuUnfoldOutlined
    v-if="app.isCollapse"
    class="trigger"
    @click="app.toggleCollapse"
  />
  <MenuFoldOutlined v-else class="trigger" @click="app.toggleCollapse" />
</template>

<style scoped lang="less">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover{
    color: #1890ff;
  }
}
</style>

<script setup lang='ts'>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <MenuUnfoldOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <MenuUnfoldOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <MenuUnfoldOutlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <MenuUnfoldOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.ant-layout{
  height: 100%;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
  .ant-layout-header{
    background-color: #fff;
    padding: 0;
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
  }
}
</style>

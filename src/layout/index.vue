<script setup lang="ts">

</script>
<template>
  <div class="app-container">
    <div class="layout-content">
      这是layout
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-content {
  background-color: antiquewhite;
  padding: 20px;
}
</style>

<script lang="ts" setup>
const { count, add, multiplyCount } = $(useUser())
const addClick = () => {
  add()
}
</script>

<template>
  <div>
    <div wh-300 bg-blue flexc font-600 color-red>小滴课堂</div>
    <a-button type="primary" !bg-green !font-600>按钮</a-button><br />
    <h1>当前pinia的初始值：{{ count }}</h1>
    <h2 @click="addClick">增加</h2>
    <h2>当前pinia的初始值：{{ multiplyCount }}</h2>
  </div>
</template>

<style scoped>
</style>

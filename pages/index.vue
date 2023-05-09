<script lang="ts" setup>
const { count, add, multiplyCount } = $(useUser())
const addClick = () => {
  add()
}
</script>

<template>
  <div>
    <a-button type="primary" !bg-green !font-600>button</a-button><br />
    <h1>initial value{{ count }}</h1>
    <h2 @click="addClick">incr</h2>
    <h2>calculated value：{{ multiplyCount }}</h2>
  </div>
</template>

<style scoped>
</style>

<template>
  <div class="relative">
    <div class="gradient-left pointer-events-none"/>
    <div class="gradient-right pointer-events-none"/>
    <slot/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.gradient-left {
  width: 100px;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255) 10%,
    rgba(255, 255, 255, 0)
  );
  @apply absolute pin-l pin-y z-20;
}
.gradient-right {
  width: 100px;
  background-image: linear-gradient(
    to left,
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
  @apply absolute pin-r pin-y z-20;
}
</style>
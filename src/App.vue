<template>
  <div class="text">
    <aa />
    <bb />
  </div>
</template>

<script>
import aa from './components/aa.vue'
import bb from './components/bb.vue'
export default {
  components: {
    aa, bb
  }
}
</script>

<style lang="scss" scoped>
.text {
  ::v-deep p {
    background-color: red;
  }
}
</style>
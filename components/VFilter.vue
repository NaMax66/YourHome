<template>
  <div class="v-filter_background">
    <v-range />
  </div>
</template>

<script>
import VRange from './VRange'
export default {
  name: 'VFilter',
  components: {
    VRange
  }
}
</script>

<style scoped>
  .v-filter_background {
    background-color: var(--c-white);
  }

</style>

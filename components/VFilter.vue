<template>
  <div class="v-filter_background">
    <v-range :interval="[200, 500]" :value="[200, 500]" />
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
    height: 80rem;
  }

</style>

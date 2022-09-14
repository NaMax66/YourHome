<template>
  <div>
    <v-header />
    <Nuxt />
    <v-footer />
  </div>
</template>

<script>
import VHeader from '~/components/VHeader'
import VFooter from '~/components/VFooter'

export default {
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

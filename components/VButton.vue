<template>
  <component :is="component" :[href]="link">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    link: {
      type: String,
      default: null
    }
  },
  computed: {
    href () {
      return this.link ? 'href' : null
    },
    component () {
      let c = 'button'
      if (this.link) {
        c = 'a'
      }
      return c
    }
  }
}
</script>

<style scoped>

</style>

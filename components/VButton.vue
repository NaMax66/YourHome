<template>
  <component
    :is="component"
    class="v-button"
    :class="{__main_action_btn: mainActionBtn}"
    :[href]="link"
  >
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
    },
    mainActionBtn: {
      type: Boolean,
      default: false
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
.v-button {
  font-family: var(--f-header);
  display: inline-block;
  &.__main_action_btn {
    font-size: 4rem;
    padding: 1rem 3rem;
    color: var(--c-white);
    background-color: color-mod(var(--c-white) a(20%));
    border: 1px solid var(--c-white);
    border-radius: 3px;
    outline: none;
  }
}
</style>

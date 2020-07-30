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
      let componentName = 'button'
      if (this.link) {
        componentName = 'a'
      }
      return componentName
    }
  }
}
</script>

<style scoped>
.v-button {
  font-family: var(--f-header);
  display: inline-block;
  cursor: pointer;
  &.__main_action_btn {
    font-size: 4rem;
    padding: 1rem 3rem;
    color: var(--c-white);
    background-color: color-mod(var(--c-white) a(20%));
    border: 1px solid var(--c-white);
    border-radius: 3px;
    outline: none;
    transition: all .4s;
    &:hover,
    &:active {
      background-color: var(--c-white);
      color: var(--c-black);
    }
  }
}
</style>

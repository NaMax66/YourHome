<template>
  <component
    :is="component"
    class="v-button"
    :class="{main_action_btn: mainActionBtn, table_btn: tableButton, empty: empty}"
    :[href]="link"
    :target="link ? '_blank': null"
    @click="$emit('click')"
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
    },
    tableButton: {
      type: Boolean,
      default: false
    },
    empty: {
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

<style lang="scss" scoped>
.v-button {
  font-family: var(--f-header);
  display: inline-block;
  cursor: pointer;

  &.main_action_btn {
    font-size: 3rem;
    padding: 1rem 2.5rem;
    color: var(--c-white);
    background-color: color(var(--c-white) a(20%));
    border: 1px solid var(--c-white);
    border-radius: 3px;
    outline: none;
    transition: all 0.4s;

    &:hover,
    &:active {
      background-color: var(--c-white);
      color: var(--c-black);
    }

    @media (max-width: 800px) {
      font-size: 2rem;
      padding: 1rem 2rem;
    }

    @media (max-width: 380px) {
      font-size: 1.6rem;
    }
  }

  &.table_btn {
    font-family: var(--f-main);
    font-size: 2rem;
    padding: 1rem 2rem;
    color: var(--c-white);
    background-color: color(var(--c-white) a(20%));
    border: 1px solid var(--c-white);
    border-radius: 3px;
    outline: none;
    transition: all 0.4s;

    &:hover,
    &:active {
      background-color: var(--c-white);
      color: var(--c-black);
    }
  }

  &.empty {
    background: transparent;
    border: none;
  }
}
</style>

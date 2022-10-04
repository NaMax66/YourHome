<template>
  <button
    class="v-button"
    :class="classes"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    size: {
      type: String,
      default: 'l',
      validator (v) {
        return ['l', 'xl'].includes(v)
      }
    },

    isEmpty: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        [`v-button--${this.size}`]: true,
        'v-button--empty': this.isEmpty
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins/media";

.v-button {
  display: inline-block;
  cursor: pointer;
  color: var(--c-white);
  background-color: var(--c-white-a20);
  border: 1px solid var(--c-white);
  border-radius: 3px;
  outline: none;
  transition: all 0.2s;

  &:hover,
  &:active {
    background-color: var(--c-white);
    color: var(--c-black);
  }

  &--xl {
    font-size: 3rem;
    padding: 1rem 2.5rem;

    @include devices(tablet) {
      font-size: 2rem;
      padding: 1rem 2rem;
    }

    @include devices(mobile) {
      font-size: 1.6rem;
      padding: 0.8rem 1.6rem;
    }
  }

  &--l {
    font-size: 2rem;
    padding: 1rem 2rem;

    @include devices(tablet) {
      font-size: 1.8rem;
      padding: 0.8rem 1.6rem;
    }

    @include devices(mobile) {
      font-size: 1.4rem;
      padding: 0.6rem 1.2rem;
    }
  }

  &--empty {
    background: transparent;
    border: none;
  }
}
</style>

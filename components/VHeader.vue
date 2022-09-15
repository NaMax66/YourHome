<template>
  <div class="menu_wrap">
    <div class="wrapper v-menu_controls">
      <ul class="menu_left-list">
        <li v-if="screenWidth > 930">
          <a href="#neighbourhood">neighbourhood</a>
        </li>
        <li v-if="screenWidth >= 770">
          <a href="#facilities">facilities</a>
        </li>
        <li v-if="screenWidth > 440">
          <a href="#interior">interior</a>
        </li>
      </ul>
      <div class="menu-label">
        <a href="https://www.growyourhouse.uk/" title="company's website" target="_blank">GrowHouse Co.</a>
      </div>
      <ul class="menu_right-list">
        <li v-if="screenWidth >= 770">
          <a href="#house_list">house list</a>
        </li>
        <li v-if="screenWidth > 440">
          <a href="#visual_choice">visual choice</a>
        </li>
        <li v-if="screenWidth > 930">
          <a href="#location">location</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { screenWidth } from '~/assets/mixins'

export default {
  name: 'VHeader',
  mixins: [screenWidth]
}
</script>

<style lang="scss" scoped>
.menu_wrap {
  position: fixed;
  z-index: 100;
  width: 100%;
  color: var(--c-light-gray);
  background-color: var(--c-black-a90);
  padding: 1rem 0;
  backdrop-filter: saturate(180%) blur(5px);
}

.v-menu_controls {
  display: flex;
  justify-content: space-between;
}

.menu-label {
  & > a {
    display: block;
    font-size: 3rem;
    margin: 0 5rem;
    line-height: 3rem;
    white-space: nowrap;
    color: var(--c-white);
    transition: all 0.3s;
  }
}

.menu_left-list,
.menu_right-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 36%;

  @media (max-width: 770px) {
    justify-content: center;
  }

  & a {
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 2rem;
    transition: color 0.3s;

    &:hover,
    &:focus {
      color: var(--c-white);
    }
  }
}
</style>

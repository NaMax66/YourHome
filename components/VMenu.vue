<template>
  <div class="v-menu_wrap">
    <div class="wrapper v-menu_controls">
      <ul class="v-menu_left-list">
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
      <div class="v-menu_label">
        <a href="https://www.growyourhouse.uk/" title="company's website" target="_blank">GrowHouse Co.</a>
      </div>
      <ul class="v-menu_right-list">
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
import { screenWidth } from '../assets/mixins'

export default {
  name: 'VMenu',
  mixins: [screenWidth]
}
</script>

<style scoped>
.v-menu_wrap {
  position: fixed;
  z-index: 100;
  width: 100%;
  color: var(--c-light-gray);
  background-color: color-mod(var(--c-black) a(80%));
  padding: 1rem 0;
}
.v-menu_controls {
  display: flex;
  justify-content: space-between;
}
.v-menu_left-list,
.v-menu_right-list {
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
    transition: color .3s;
    &:hover,
    &:focus {
      color: var(--c-white);
    }
  }
}
.v-menu_label {
  & > a {
    display: block;
    font-size: 3rem;
    margin: 0 5rem;
    line-height: 3rem;
    white-space: nowrap;
    color: var(--c-white);
    transition: all .3s;
  }
}
</style>

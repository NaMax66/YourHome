<template>
  <div class="menu_wrap">
    <div class="wrapper v-menu_controls">
      <ul class="menu_left-list">
        <li v-if="screenWidth > 930">
          <a :href="`#${blockIds.neighbourhood.id}`">{{ blockIds.neighbourhood.name }}</a>
        </li>
        <li v-if="screenWidth >= 770">
          <a :href="`#${blockIds.facilities.id}`">{{ blockIds.facilities.name }}</a>
        </li>
        <li v-if="screenWidth > 440">
          <a :href="`#${blockIds.interior.id}`">{{ blockIds.interior.name }}</a>
        </li>
      </ul>
      <div class="menu-label">
        <a href="https://www.growyourhouse.uk/" title="company's website" target="_blank">GrowHouse Co.</a>
      </div>
      <ul class="menu_right-list">
        <li v-if="screenWidth >= 770">
          <a :href="`#${blockIds.houseList.id}`">{{ blockIds.houseList.name }}</a>
        </li>
        <li v-if="screenWidth > 440">
          <a :href="`#${blockIds.visualChoice.id}`">{{ blockIds.visualChoice.name }}</a>
        </li>
        <li v-if="screenWidth > 930">
          <a :href="`#${blockIds.location.id}`">{{ blockIds.location.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { screenWidth } from '~/assets/mixins'
import blockIds from '~/models/blockIds'

export default {
  name: 'VHeader',

  mixins: [screenWidth],

  data: () => ({
    blockIds
  })
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

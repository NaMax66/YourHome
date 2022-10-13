<template>
  <div class="v-header">
    <div class="wrapper menu-actions">
      <ul class="menu-actions__left">
        <li v-if="screenWidth > 930">
          <a class="block-ref" :href="`#${blockIds.neighbourhood.id}`">{{ blockIds.neighbourhood.name }}</a>
        </li>
        <li v-if="screenWidth >= 770">
          <a class="block-ref" :href="`#${blockIds.facilities.id}`">{{ blockIds.facilities.name }}</a>
        </li>
        <li v-if="screenWidth > 440">
          <a class="block-ref" :href="`#${blockIds.interior.id}`">{{ blockIds.interior.name }}</a>
        </li>
      </ul>
      <div>
        <a
          class="menu-label"
          href="https://www.growyourhouse.uk/"
          title="company's website"
          target="_blank"
        >GrowHouse Co.</a>
      </div>
      <ul class="menu-actions__right">
        <li v-if="screenWidth >= 770">
          <a class="block-ref" :href="`#${blockIds.houseList.id}`">{{ blockIds.houseList.name }}</a>
        </li>
        <li v-if="screenWidth > 440">
          <a class="block-ref" :href="`#${blockIds.visualChoice.id}`">{{ blockIds.visualChoice.name }}</a>
        </li>
        <li v-if="screenWidth > 930">
          <a class="block-ref" :href="`#${blockIds.location.id}`">{{ blockIds.location.name }}</a>
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
@import "assets/styles/mixins/media";

.v-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  color: var(--c-light-gray);
  background-color: var(--c-black-a90);
  padding: 1rem 0;
  backdrop-filter: saturate(180%) blur(5px);
}

.menu-actions {
  display: flex;
  justify-content: space-between;

  &__left,
  &__right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 36%;

    @include devices(desktop) {
      justify-content: center;
    }
  }
}

.block-ref {
  font-size: 2rem;
  text-transform: uppercase;
  line-height: 2rem;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--c-white);
  }
}

.menu-label {
  display: block;
  font-size: 3rem;
  margin: 0 5rem;
  line-height: 3rem;
  white-space: nowrap;
  color: var(--c-white);
  transition: all 0.3s;
}
</style>

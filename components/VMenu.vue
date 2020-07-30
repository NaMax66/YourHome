<template>
  <div class="v-menu_wrap">
    <div class="wrapper v-menu_controls">
      <ul class="v-menu_left-list">
        <li><a href="#facilities">facilities</a></li>
        <li><a href="#neighbours">neighbours</a></li>
        <li><a href="#inside">inside</a></li>
      </ul>
      <div class="v-menu_label">
        <a href="https://www.growyourhouse.uk/" target="_blank">GrowYourHouse Co.</a>
      </div>
      <ul class="v-menu_right-list">
        <li><a href="#outside">outside</a></li>
        <li><a href="#location">layout</a></li>
        <li><a href="#location">location</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VMenu'
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
    font-size: 3rem;
    margin: 0 5rem;
    line-height: 3rem;
    white-space: nowrap;
    color: var(--c-white);
  }
}
</style>

<template>
  <div class="v-footer_background">
    <div class="wrapper">
      <div class="v-footer-info">
        <p>Made by NaMax66</p>
        <p>Copyright</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae blanditiis culpa eius, est fugiat itaque iure maxime molestiae provident quam quas quibusdam repudiandae tempore temporibus vel, vitae voluptatum?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooter'
}
</script>

<style scoped>
  .v-footer_background {
    background-color: var(--c-black);
  }
  .v-footer-info {
    font-size: 2rem;
    color: var(--c-white);
    height: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5rem 0 2rem;
    & p {
      flex-basis: 30%;
    }
  }
</style>

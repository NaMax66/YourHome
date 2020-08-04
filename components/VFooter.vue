<template>
  <div class="v-footer_background">
    <div class="wrapper">
      <div class="v-footer-info">
        <p>&copy; made by Max Naidovich</p>
        <div class="v-footer_social">
          <a href=""><img src="/icons/telegram.svg" alt=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
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
    background-color: var(--c-white);
  }
  .v-footer-info {
    font-size: 2rem;
    color: var(--c-black);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5rem 0 2rem;
    & p {
      flex-basis: 30%;
    }
  }
</style>

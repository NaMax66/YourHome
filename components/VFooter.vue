<template>
  <div class="v-footer_background">
    <div class="wrapper">
      <div class="v-footer-info">
        <p>&copy; This is a sample website by Max Naidovich</p>
        <div class="v-footer_social">
          <a class="v-footer_social-link" href="https://t.me/namax66" target="_blank">
            <v-sprite icon="telegram" />
          </a>
          <a class="v-footer_social-link" href="https://github.com/NaMax66" target="_blank">
            <v-sprite icon="github" />
          </a>
          <a class="v-footer_social-link" href="https://www.linkedin.com/in/max-naydovich" target="_blank">
            <v-sprite icon="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSprite from './VSprite'
export default {
  name: 'VFooter',
  components: VSprite
}
</script>

<style scoped>
  .v-footer_background {
    background-color: var(--c-black);
  }
  .v-footer-info {
    font-size: 1.8rem;
    color: var(--c-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
    & p {
      flex-basis: 30%;
      @media (max-width: 600px) {
        flex-basis: 40%;
        margin-right: 2rem;
      }
    }
  }
  .v-sprite {
    height: 4rem;
    width: 4rem;
    transition: all .3s;
    fill: var(--c-white);

    &:hover {
      fill: var(--c-light-gray);
    }
  }
  .v-footer_social-link {
    display: inline-block;
    height: 100%;
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
</style>

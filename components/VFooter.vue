<template>
  <div class="v-footer">
    <div class="wrapper">
      <div class="v-footer-info">
        <p>&copy; This is a sample website by <br> Max Naidovich</p>
        <div class="social-links">
          <a class="social-link" href="https://t.me/namax66" target="_blank">
            <v-sprite icon="telegram" />
          </a>
          <a class="social-link" href="https://github.com/NaMax66" target="_blank">
            <v-sprite icon="github" />
          </a>
          <a class="social-link" href="https://www.linkedin.com/in/max-naydovich" target="_blank">
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

<style lang="scss" scoped>
@import "assets/styles/mixins/media";

.v-footer {
  background-color: var(--c-black);
}

.v-footer-info {
  font-size: 1.8rem;
  color: var(--c-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  @include devices(tablet) {
    padding: 1rem 0;
  }

  & p {
    flex-basis: 30%;

    @include devices(tablet) {
      flex-basis: 45%;
      margin-right: 1rem;
    }
  }
}

.v-sprite {
  height: 4rem;
  width: 4rem;
  transition: all 0.3s;
  fill: var(--c-white);

  &:hover {
    fill: var(--c-light-gray);
  }
}

.social-link {
  display: inline-block;
  height: 100%;

  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>

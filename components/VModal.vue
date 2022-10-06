<template>
  <div class="v-modal" @click.self="$emit('close')">
    <div class="v-modal__wrap">
      <v-button class="close-btn" is-empty @click="$emit('close')">
        <v-sprite icon="cross" />
      </v-button>
      <div class="v-modal__content">
        <slot v-if="!isSuccessShown" name="info" />
        <v-button
          v-if="!isSuccessShown"
          class="action-btn"
          is-empty
          @click="$emit('submit')"
        >
          <slot name="button" />
        </v-button>
        <div v-if="isSuccessShown">
          <slot name="message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from './VButton'
import VSprite from './VSprite'
export default {
  name: 'VModal',

  components: { VSprite, VButton },

  props: {
    isSuccessShown: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/media";
  .v-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--c-black-a90);
    z-index: 200;
  }

  .v-modal__wrap {
    position: relative;
    width: 30%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    color: var(--c-white);
    border: 1px solid var(--c-white);
    padding: 2rem;
    border-radius: 3px;

    @include devices(desctop) {
      width: 50%;
    }

    @include devices(tablet) {
      width: 60%;
    }

    @include devices(mobile) {
      width: 90%;
    }
  }

  .v-sprite {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }

  .close-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    right: 2rem;
    padding: 1rem;
  }

  .v-modal__content {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }

  .action-btn {
    align-self: center;
    margin-top: 2rem;
  }
</style>

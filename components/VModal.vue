<template>
  <div class="v-modal_background" @click.self="$emit('close')">
    <div class="v-modal_content_wrap">
      <v-button class="v-modal_close-btn" is-empty @click="$emit('close')">
        <v-sprite icon="cross" />
      </v-button>
      <div class="v-modal_content">
        <slot v-if="!isSuccessShown" name="info" />
        <v-button
          v-if="!isSuccessShown"
          class="v-modal_action_btn"
          is-empty
          @click="$emit('submit')"
        >
          <slot name="button" />
        </v-button>
        <div v-if="isSuccessShown">
          <slot name="thanks" />
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
  .v-modal_background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--c-black-a90);
    z-index: 200;

    @media (max-width: 700px) {
      height: 110vh;
    }
  }

  .v-modal_content_wrap {
    position: relative;
    width: 30%;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    color: var(--c-white);
    border: 1px solid var(--c-white);
    padding: 2rem;
    border-radius: 3px;

    @media (max-width: 1500px) {
      width: 40%;
    }

    @media (max-width: 900px) {
      width: 50%;
    }

    @media (max-width: 700px) {
      width: 60%;
    }

    @media (max-width: 580px) {
      width: 90%;
    }
  }

  .v-sprite {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }

  .v-modal_close-btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    right: 2rem;
    padding: 1rem;
  }

  .v-modal_content {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
  }

  .v-modal_action_btn {
    align-self: center;
    margin-top: 2rem;
  }
</style>

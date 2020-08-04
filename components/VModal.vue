<template>
  <div class="v-modal_background" @click.self="$emit('close')">
    <div class="v-modal_content_wrap">
      <v-button class="v-modal_close-btn" empty @click="$emit('close')">
        <v-sprite icon="cross" />
      </v-button>
      <div class="v-modal_content">
        <slot v-if="!isSuccessShown" name="info" />
        <v-button v-if="!isSuccessShown" class="v-modal_action_btn" table-button @click="$emit('submit')">
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

<style scoped>
  .v-modal_background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: color-mod(var(--c-black) a(90%));
    z-index: 200;
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
  }
  .v-sprite {
    width: 2rem;
    height: 2rem;
    fill: var(--c-white);
    &:hover {
      fill: var(--c-light-gray);
    }
  }
  .v-modal_close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
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

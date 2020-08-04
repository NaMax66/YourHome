<template>
  <div class="v-feedback_background">
    <div class="wrapper">
      <div class="v-feedback_controls">
        <input type="text" placeholder="Your name" class="v-feedback_modal_input">
        <input type="tel" pattern="[0-9]*" placeholder="Your phone" novalidate class="v-feedback_modal_input">
        <v-button class="v-feedback_action-btn" table-button>
          contact us
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from './VButton'
export default {
  name: 'VFeedback',
  components: { VButton }
}
</script>

<style scoped>
  .v-feedback_background {
    background-color: var(--c-black);
  }
  .v-feedback_modal_input {
    height: 4rem;
    font-size: 2rem;
    line-height: 2rem;
    border: none;
    border-radius: 3px;
    padding-left: 1rem;
    margin: 2rem 2rem 2rem;
    width: 25%;
    &:last-child {
      margin-bottom: 4rem;
    }
  }
  .v-feedback_action-btn {
    margin-left: auto;
  }
  .v-feedback_controls {
    display: flex;
    align-items: center;
  }
</style>

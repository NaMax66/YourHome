<template>
  <div class="v-feedback_background">
    <div class="wrapper">
      <div class="v-feedback_controls">
        <input type="text" placeholder="Your name" class="v-feedback_modal_input">
        <input type="tel" pattern="[0-9]*" placeholder="Your phone" novalidate class="v-feedback_modal_input">
        <v-button class="v-feedback_action-btn" table-button @click="handleSubmit">
          contact us
        </v-button>
      </div>
    </div>
    <v-modal v-show="isModalOpen" :is-success-shown="true" @close="closeModal">
      <template #thanks>
        <p class="v-feedback_modal_info">
          Thank you. We will call you soon!
        </p>
      </template>
    </v-modal>
  </div>
</template>

<script>
import VButton from './VButton'
import VModal from './VModal'
export default {
  name: 'VFeedback',
  components: { VModal, VButton },
  data: () => ({
    isModalOpen: false
  }),
  methods: {
    handleSubmit () {
      this.isModalOpen = true
      setTimeout(() => {
        this.isModalOpen = false
      }, 4000)
    },
    closeModal () {
      this.isModalOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-feedback_background {
    background-color: var(--c-black);

    @media (max-width: 420px) {
      display: none;
    }
  }

  .v-feedback_modal_input {
    height: 4rem;
    font-size: 2rem;
    line-height: 2rem;
    border: none;
    border-radius: 3px;
    padding-left: 1rem;
    margin: 2rem;
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

  .v-feedback_modal_info {
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }
</style>

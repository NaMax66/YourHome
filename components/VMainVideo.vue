<template>
  <header class="v-main-video_wrap">
    <video
      class="v-main-video"
      loop
      autoplay
      poster="main.png"
      muted="muted"
      alt="video"
    >
      <source src="video.mp4">
      <source src="video.webm">
    </video>
    <div class="v-main-video_info wrapper">
      <h1 class="v-main-video_header">
        Robust real estate
      </h1>
      <h2 class="v-main-video_header2">
        in the heart of England
      </h2>
      <v-button main-action-btn @click="openModal">
        book your viewing
      </v-button>
    </div>
    <v-modal v-show="isModalOpen" :is-success-shown="isSuccessShown" @close="closeModal" @submit="submitModal">
      <template #info>
        <p class="v-main-video_modal_info">
          Please, enter your name and phone<br>
          so we could contact you
        </p>
        <input type="text" placeholder="Your name" class="v-main-video_modal_input">
        <input type="tel" pattern="[0-9]*" placeholder="Your phone" novalidate class="v-main-video_modal_input">
      </template>
      <template #button>
        book
      </template>
      <template #thanks>
        <p class="v-main-video_modal_info">
          Thank you. We will call you soon!
        </p>
      </template>
    </v-modal>
  </header>
</template>

<script>
import VButton from './VButton'
import VModal from './VModal'
export default {
  name: 'VMainVideo',
  components: {
    VModal,
    VButton
  },
  data: () => ({
    isModalOpen: false,
    isSuccessShown: false
  }),
  methods: {
    closeModal () {
      this.isModalOpen = false
      this.isSuccessShown = false
    },
    openModal () {
      this.isModalOpen = true
    },
    submitModal () {
      this.isSuccessShown = true
      setTimeout(() => {
        this.isSuccessShown = false
        this.isModalOpen = false
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-main-video_wrap {
    position: relative;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70rem;
    overflow: hidden;
  }

  .v-main-video {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .v-main-video_info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .v-main-video_header,
  .v-main-video_header2 {
    white-space: nowrap;
    font-family: var(--f-header);
    font-weight: normal;
    color: var(--c-white);
    font-size: calc(30px + (80 - 30) * ((100vw - 320px) / (1920 - 320)));
  }

  .v-main-video_header2 {
    font-size: calc(20px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 2rem;
  }

  .v-button {
    margin-top: 7rem;

    @media (max-width: 800px) {
      margin-top: 4rem;
    }
  }

  .v-main-video_modal_info {
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }

  .v-main-video_modal_input {
    height: 4rem;
    font-size: 2rem;
    line-height: 2rem;
    border: none;
    border-radius: 3px;
    margin-bottom: 2rem;
    padding-left: 1rem;

    &:last-child {
      margin-bottom: 4rem;
    }
  }
</style>

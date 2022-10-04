<template>
  <header class="main-video-wrap">
    <video
      class="main-video"
      loop
      autoplay
      poster="main.png"
      muted="muted"
      alt="video"
    >
      <source src="video.mp4">
      <source src="video.webm">
    </video>
    <div class="main-video__info wrapper">
      <h1 class="main-video__header">
        Robust real estate
      </h1>
      <h2 class="main-video__header2">
        in the heart of England
      </h2>
      <v-button size="xl" @click="openModal">
        <span class="font-accent">book your viewing</span>
      </v-button>
    </div>
    <v-modal
      v-show="isModalOpen"
      :is-success-shown="isSuccessShown"
      @close="closeModal"
      @submit="submitModal"
    >
      <template #info>
        <p class="main-video_modal__info">
          Please, enter your name and phone<br>
          so we could contact you
        </p>
        <input type="text" placeholder="Your name" class="main-video__input">
        <input
          type="tel"
          pattern="[0-9]*"
          placeholder="Your phone"
          novalidate
          class="main-video__input"
        >
      </template>
      <template #button>
        book
      </template>
      <template #thanks>
        <p class="main-video_modal__info">
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
  name: 'MainVideo',

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
@import "../assets/mixins/media";

  .main-video-wrap {
    position: relative;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70rem;
    overflow: hidden;
  }

  .main-video {
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .main-video__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-video__header,
  .main-video__header2 {
    white-space: nowrap;
    font-family: var(--f-header);
    font-weight: normal;
    color: var(--c-white);
    font-size: calc(30px + (80 - 30) * ((100vw - 320px) / (1920 - 320)));
  }

  .main-video__header2 {
    font-size: calc(20px + (50 - 30) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 2rem;
  }

  .v-button {
    margin-top: 7rem;

    @include devices(tablet) {
      margin-top: 4rem;
    }
  }

  .main-video_modal__info {
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }

  .main-video__input {
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

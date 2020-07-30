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
      <v-button main-action-btn>
        book your viewing
      </v-button>
    </div>
  </header>
</template>

<script>
import VButton from './VButton'
export default {
  name: 'VMainVideo',
  components: {
    VButton
  }
}
</script>

<style scoped>
  .v-main-video_wrap {
    position: relative;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70rem;
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
    font-family: var(--f-header);
    font-weight: normal;
    color: var(--c-white);
    font-size: 10rem;
    line-height: 10rem;
  }
  .v-main-video_header2 {
    font-size: 6rem;
    line-height: 6rem;
    margin-top: 2rem;
  }
  .v-button {
    margin-top: 7rem;
  }
</style>

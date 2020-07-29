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
    <div class="v-main-video_info">
      <h1 class="v-main-video_header">
        Robust real estate
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VMainVideo'
}
</script>

<style scoped>
  .v-main-video {
    width: 100%;
    object-fit: cover;
    height: 60rem;
  }
  .v-main-video_header {
    font-family: var(--f-header);
    font-weight: 700;
    color: var(--c-white);
  }
</style>

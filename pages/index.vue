<template>
  <div class="">
    <video
      class="index_video"
      loop
      autoplay
      poster="main.png"
      muted="muted"
      alt="video"
    >
      <source src="video.mp4">
      <source src="video.webm">
    </video>
  </div>
</template>

<script>
export default {}
</script>

<style>
.index_video {
  width: 100%;
  object-fit: cover;
  height: 100%;
  min-height: 600px;
  max-height: 600px;
}
</style>

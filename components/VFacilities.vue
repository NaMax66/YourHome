<template>
  <div class="v-facilities_background">
    <div class="wrapper v-facilities_wrap">
      <div class="v-facilities_info">
        <h2>St Margaret's C Of E Primary School</h2>
        <h2>North to Birmingham</h2>
        <h2>Sandwell Hospital</h2>
        <h2>Oakwood Park</h2>
      </div>
      <div class="v-facilities_slider">
        <img src="../static/img/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFacilities'
}
</script>

<style scoped>
  .v-facilities_background {
    background-color: var(--c-white);
  }
  .v-facilities_wrap {
    padding-top: 5rem;
    height: 53rem;
    display: flex;
  }
  .v-facilities_info {
    flex-basis: 50%;
    color: var(--c-black);
  }
  .v-facilities_slider {
    flex-basis: 50%;
    & img {
      width: 100%;
      height: auto;
      max-height: 60rem;
    }
  }
</style>

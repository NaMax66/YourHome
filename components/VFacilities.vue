<template>
  <div class="v-facilities_background">
    <div class="wrapper v-facilities_wrap">
      <div class="v-facilities_info">
        <h2>St Margaret's C Of E Primary School</h2>
        <!-- <h2>North to Birmingham</h2>
        <h2>Sandwell Hospital</h2>
        <h2>Oakwood Park</h2> -->
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa ea id illo incidunt ipsa laborum non quibusdam sint vero. Aliquam autem dignissimos dolore, eius ex explicabo fugiat, id impedit iure laborum libero necessitatibus nihil nisi placeat porro provident quaerat quibusdam quos recusandae sapiente sequi ut veritatis voluptatem? At autem beatae consequatur eius hic iste labore laudantium magnam modi molestiae nemo numquam obcaecati, placeat quis reiciendis repellat, sunt tempore voluptate voluptates voluptatibus. At debitis earum excepturi fuga illum inventore, provident quo similique. Culpa doloremque doloribus inventore neque repellat? Aspernatur earum ex facere harum impedit necessitatibus nemo nisi numquam sapiente voluptatem!</p>
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
    padding-right: 5rem;
    color: var(--c-black);
    & h2 {
      font-size: 2.8rem;
    }
    & p {
      margin-top: 2rem;
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }
  .v-facilities_slider {
    flex-basis: 50%;
    & img {
      width: 100%;
      height: auto;
      max-height: 60rem;
      border-radius: 3px;
    }
  }
</style>

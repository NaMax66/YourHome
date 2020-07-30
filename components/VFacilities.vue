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
      <div class="v-facilities_swiper">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <img src="../static/img/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg" alt="">
          </swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
          <swiper-slide>Slide 7</swiper-slide>
          <swiper-slide>Slide 8</swiper-slide>
          <swiper-slide>Slide 9</swiper-slide>
          <swiper-slide>Slide 10</swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <!--<div class="v-facilities_swiper_controls">
          <v-button class="v-facilities_swiper_controls-prev">
            Prev
          </v-button>
          <v-button class="v-facilities_swiper_controls-next">
            Next
          </v-button>
        </div>-->
      </div>
    </div>
    <v-button />
  </div>
</template>

<script>
import VButton from './VButton'
export default {
  name: 'VFacilities',
  components: { VButton },
  data: () => ({
    swiperOption: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  }),
  methods: {
  }
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
    width: 50%;
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
  .v-facilities_swiper {
    position: relative;
    width: 50%;
  }
  .swiper {
    width: 100%;
    max-height: 60rem;
    max-width: 70rem;
    & img {
      width: 100%;
      height: auto;
      border-radius: 3px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--c-white);
  }
  .v-facilities_swiper_controls {
    height: 3rem;
    position: relative;
    z-index: 10;
  }
</style>

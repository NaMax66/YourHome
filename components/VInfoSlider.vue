<template>
  <div class="v-info-slider_background">
    <div class="wrapper v-info-slider_wrap">
      <div class="v-info-slider_info">
        <h2>Hello Slider</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem doloribus illo illum, impedit maxime perferendis. Ad, aliquid beatae corporis est illo incidunt iste necessitatibus nisi perferendis, quae quasi quis.
        </p>
      </div>
      <div class="v-info-slider_swiper">
        <swiper
          v-if="isReady"
          ref="swiper"
          class="swiper"
          :options="swiperOption"
        >
          <swiper-slide>
            <img src="../static/img/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../static/img/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../static/img/ryan-jacobson-cXUOQWdRV4I-unsplash.jpg" alt="">
          </swiper-slide>
        </swiper>
        <div ref="nextEl" class="swiper-button-next" />
        <div ref="prevEl" class="swiper-button-prev" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VInfoSlider',
  props: {
    theme: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isReady: false,
    swiperOption: {
      navigation: {
        nextEl: null,
        prevEl: null
      }
    }
  }),
  mounted () {
    this.swiperOption.navigation.nextEl = this.$refs.nextEl
    this.swiperOption.navigation.prevEl = this.$refs.prevEl
    this.isReady = true
  }
}
</script>

<style scoped>
  .v-info-slider_background {
    background-color: var(--c-white);
  }
  .v-info-slider_wrap {
    padding-top: 5rem;
    height: 53rem;
    display: flex;
  }
  .v-info-slider_info {
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
  .v-info-slider_swiper {
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
</style>

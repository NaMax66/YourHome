<template>
  <div class="v-info-slider_background" :class="theme">
    <div class="wrapper v-info-slider_wrap" :class="[direction, theme]">
      <div class="v-info-slider_info" :class="direction">
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
            <img src="../static/img/hans-m-C5ORgbT2kGk-unsplash.jpg" alt="">
          </swiper-slide>
          <swiper-slide v-for="slide in slides" :key="slide.id">
            <img :src="`img/${slide.img}`" alt="">
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
    slides: {
      type: Array,
      required: true
    },
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
    &.light {
      background-color: var(--c-white);
    }
    &.dark {
      background-color: var(--c-black);
    }
  }
  .v-info-slider_wrap {
    padding-top: 5rem;
    height: 53rem;
    display: flex;
    &.rtl {
      flex-direction: row-reverse;
    }
    &.dark {
      color: var(--c-light-gray);
    }
    &.light {
      color: var(--c-black);
    }
  }
  .v-info-slider_info {
    width: 50%;
    padding-right: 5rem;
    &.rtl {
      padding-right: 0;
      padding-left: 5rem;
    }
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

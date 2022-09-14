<template>
  <div class="v-info-slider_background" :class="theme">
    <div class="wrapper v-info-slider_wrap" :class="[direction, theme]">
      <div
        v-if="currentSlide"
        class="v-info-slider_info"
        :class="[!isTransitioning ? 'visible' : '', direction]"
      >
        <h2>
          {{ currentSlide.header }}
        </h2>
        <p>
          {{ currentSlide.text }}
        </p>
      </div>
      <div class="v-info-slider_swiper">
        <swiper
          v-if="isReady"
          ref="swiper"
          class="swiper"
          :options="swiperOption"
          @slideChange="setCurrentSlide"
          @slideChangeTransitionStart="isTransitioning = true"
          @slideChangeTransitionEnd="isTransitioning = false"
        >
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
// import { Swiper, SwiperSlide } from 'swiper/vue'

const components = {}
if (process.client) {
  components.Swiper = require('swiper/vue/swiper.js')
  components.SwiperSlide = require('swiper/vue/swiper-slide.js')
}

export default {
  name: 'VInfoSlider',
  components: {
    ...components
  },
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
    isTransitioning: false,
    isReady: false,
    currentSlide: null,
    swiperOption: {
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: null,
        prevEl: null
      }
    }
  }),
  mounted () {
    this.setInitialSlide()
    this.setSwiperControls()
  },
  methods: {
    setInitialSlide () {
      if (this.slides.length) {
        this.currentSlide = this.slides[0]
      }
    },
    setSwiperControls () {
      this.swiperOption.navigation.nextEl = this.$refs.nextEl
      this.swiperOption.navigation.prevEl = this.$refs.prevEl
      this.isReady = true
    },
    setCurrentSlide () {
      const id = this.$refs.swiper.$swiper.realIndex
      this.currentSlide = this.slides[id]
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-info-slider_background {
    &.light {
      background-color: var(--c-white);
    }

    &.dark {
      background-color: var(--c-black);
    }
  }

  .v-info-slider_wrap {
    display: flex;

    &.rtl {
      flex-direction: row-reverse;

      @media (max-width: 900px) {
        flex-direction: column-reverse;
      }
    }

    &.dark {
      color: var(--c-light-gray);
    }

    &.light {
      color: var(--c-black);

      @media (max-width: 900px) {
        & .swiper-button-next,
        & .swiper-button-prev {
          color: var(--c-black);
        }
      }

      @media (max-width: 640px) {
        & .swiper-button-next,
        & .swiper-button-prev {
          color: var(--c-white);
        }
      }
    }

    @media (max-width: 900px) {
      flex-direction: column-reverse;
    }
  }

  .v-info-slider_info {
    width: 50%;
    padding-right: 5rem;

    @media (max-width: 900px) {
      width: 90%;
      padding-right: 0;
      padding-top: 4rem;
    }

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.1s;

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    &.rtl {
      padding-right: 0;
      padding-left: 5rem;

      @media (max-width: 900px) {
        width: 90%;
        padding-left: 0;
        padding-top: 4rem;
      }
    }

    & h2 {
      font-size: 3.8rem;
    }

    & p {
      margin-top: 2rem;
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  .v-info-slider_swiper {
    position: relative;
    width: 50%;

    @media (max-width: 900px) {
      width: 100%;
    }
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

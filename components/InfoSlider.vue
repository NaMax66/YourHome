<template>
  <div
    :id="id"
    class="slider-background"
    :class="theme"
  >
    <div class="wrapper slider-wrap" :class="[direction, theme]">
      <div
        v-if="currentSlide"
        class="slider-info"
        :class="[!isTransitioning ? 'slider-info--visible' : '', direction]"
      >
        <h2>
          {{ currentSlide.header }}
        </h2>
        <p>
          {{ currentSlide.text }}
        </p>
      </div>
      <div :id="id" class="slider-swiper">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              v-for="slide in slides"
              :key="slide.id"
              class="swiper-slide"
            >
              <img
                class="img-class"
                :src="`img/${slide.img}`"
                alt=""
              >
            </div>
          </div>
          <div class="swiper-button-prev" />
          <div class="swiper-button-next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Swiper = null

const swiperModules = {
  Navigation: null
}

if (process.client) {
  const swiper = require('swiper')
  Swiper = swiper.Swiper
  swiperModules.Navigation = swiper.Navigation
}

export default {
  name: 'InfoSlider',

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
    },
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    isTransitioning: false,

    currentSlide: null,

    swiperOption: {
      spaceBetween: 40,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      }
    }
  }),

  mounted () {
    this.setInitialSlide()
    if (Swiper) { this.initSwiper() }
  },

  methods: {
    initSwiper () {
      const { Navigation } = swiperModules

      const swiper = new Swiper(`#${this.id} .swiper`, {
        ...this.swiperOption,
        modules: [Navigation]
      })

      swiper.on('slideChange', this.setCurrentSlide)
      swiper.on('slideChangeTransitionStart', () => { this.isTransitioning = true })
      swiper.on('slideChangeTransitionEnd', () => { this.isTransitioning = false })
    },

    setInitialSlide () {
      if (this.slides.length) {
        this.currentSlide = this.slides[0]
      }
    },

    setCurrentSlide (swiper) {
      this.currentSlide = this.slides[swiper.realIndex]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'swiper/swiper.min.css';
  @import 'swiper/modules/navigation/navigation.min.css';

  .slider-background {
    &.light {
      background-color: var(--c-white);
    }

    &.dark {
      background-color: var(--c-black);
    }
  }

  .slider-wrap {
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

  .slider-info {
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

    &--visible {
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

  .slider-swiper {
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

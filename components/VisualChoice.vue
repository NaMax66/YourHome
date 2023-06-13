<template>
  <div class="visual-choice">
    <div class="wrapper d-flex flex-tablet-column-reverse pt-3 pb-3">
      <div v-if="currentSlide" class="details">
        <div class="details__first">
          <h2 class="details__primary-header">
            No. {{ currentSlide.number }}
          </h2>
          <h2 class="details__primary-header">
            price: {{ currentSlide.price.toLocaleString('en') }} £
          </h2>
        </div>
        <div class="details__second">
          <h2 class="details__secondary-header">
            {{ currentSlide.bedroom }} bedrooms
          </h2>
          <h2 class="details__secondary-header">
            total area: {{ currentSlide.totalArea }} m²
          </h2>
        </div>
        <div class="details__img">
          <img
            :src="`../img/layout/${currentSlide.planImg}`"
            :alt="currentSlide.totalArea"
          >
        </div>
      </div>
      <div class="interactive-plan">
        <picture>
          <source srcset="img/plan.webp" type="image/webp">
          <img class="interactive-plan__img" src="img/fallback/plan.jpg" alt="general plan">
        </picture>
        <svg
          class="interactive-plan__schema"
          :viewBox="visualData.viewBox"
        >

          <!-- eslint-disable vue/no-v-html -->
          <a
            v-for="item in visualData.houses"
            :key="item.id"
            class="interactive-plan__item"
            :class="getPlanItemClasses(item)"
            @click.prevent="toggleFixSlide(item)"
            @mouseover="setCurrentSlide(item)"
            v-html="item.path"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VisualChoice',

  props: {
    visualData: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    isCurrentSlideFixed: false,
    currentSlide: null
  }),

  created () {
    if (this.visualData?.houses?.length) {
      this.setCurrentSlide(this.visualData.houses[0])
    }
  },

  methods: {
    getPlanItemClasses (item) {
      return {
        'interactive-plan__item--active': this.currentSlide.id === item.id,
        'interactive-plan__item--fixed': this.isCurrentSlideFixed && this.currentSlide.id === item.id
      }
    },

    setCurrentSlide (item) {
      if (this.isCurrentSlideFixed) {
        return
      }
      this.currentSlide = item
    },

    toggleFixSlide (item) {
      if (item.id === this.currentSlide.id) {
        this.isCurrentSlideFixed = !this.isCurrentSlideFixed
      } else {
        this.currentSlide = item
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins/media";

.visual-choice {
  background-color: var(--c-white);
}

.details {
  width: 50%;

  @include devices(tablet) {
    margin-top: 2rem;
    width: 100%;
  }

  &__img {
    margin-top: 2rem;
    margin-right: 5rem;
    height: 40rem;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    @include devices(desktop) {
      display: flex;
      justify-content: center;
      margin-right: 2rem;
      height: 28rem;
    }

    @include devices(tablet) {
      margin-right: 0;
      margin-top: 1rem;
    }
  }

  &__first,
  &__second {
    display: flex;
    justify-content: space-between;

    @include devices(tablet) {
      text-align: center;
    }
  }

  &__primary-header {
    font-family: var(--f-header);
    font-size: 3rem;
    line-height: 3.4rem;
    width: 50%;

    @include devices(desktop) {
      font-size: 2rem;
      line-height: 2.6rem;
    }
  }

  &__secondary-header {
    font-family: var(--f-header);
    font-size: 2.2rem;
    line-height: 2.8rem;
    width: 50%;

    @include devices(desktop) {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }
}

.interactive-plan {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @include devices(tablet) {
    width: 100%;
    background-position: center;
  }

  &__img {
    width: 100%;
    height: auto;
    margin-bottom: -3px;
  }

  &__schema {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }

  &__item {
    fill: transparent;
    transition: all 0.2s;

    &--active,
    &:hover {
      fill: var(--c-white-a50);
    }

    &--fixed {
      fill: var(--c-white-a80) !important;
    }
  }
}
</style>

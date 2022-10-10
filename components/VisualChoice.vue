<template>
  <div class="visual-choice">
    <div class="wrapper info-wrap">
      <div v-if="currentSlide" class="content">
        <div class="content__first">
          <h2 class="content__primary-header">
            No. {{ currentSlide.number }}
          </h2>
          <h2 class="content__primary-header">
            price: {{ currentSlide.price.toLocaleString('en') }} £
          </h2>
        </div>
        <div class="content__second">
          <h2 class="content__secondary-header">
            {{ currentSlide.bedroom }} bedrooms
          </h2>
          <h2 class="content__secondary-header">
            total area: {{ currentSlide.totalArea }} m²
          </h2>
        </div>
        <div class="content__layout-wrap">
          <img
            class="content__layout"
            :src="`../img/layout/${currentSlide.planImg}`"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="content__plan-wrap">
      <div class="mobile-info__content">
        <div class="mobile-info__left">
          <h2 class="plan-mobile__header">
            No. {{ currentSlide.number }}
          </h2>
          <h2 class="plan-mobile__header">
            price: {{ currentSlide.price.toLocaleString('en') }} £
          </h2>
          <h2 class="plan-mobile__header">
            {{ currentSlide.bedroom }} bedrooms
          </h2>
          <h2 class="plan-mobile__header">
            total area: {{ currentSlide.totalArea }} m²
          </h2>
        </div>
        <div class="mobile-info__right">
          <img
            class="mobile-info__right-img"
            :src="`../img/layout/${currentSlide.planImg}`"
            alt="room plan"
          >
        </div>
      </div>
      <div class="interactive-plan">
        <img class="interactive-plan__img" src="../static/img/chuttersnap-awL_YCtPGv4-unsplash.jpg" alt="plan">
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
    if (this.visualData.houses && this.visualData.houses.length) {
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
  position: relative;
  background-color: var(--c-white);
}

.info-wrap {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 750px) {
    display: none;
  }
}

.content {
  padding-top: 6rem;
  width: 50%;
  height: 100%;

  @media (max-width: 1320px) {
    padding-top: 3rem;
  }
}

.content__plan-wrap {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
}

.mobile-info__content {
  display: none;

  @media (max-width: 750px) {
    display: flex;
    padding: 5rem 0 2rem;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    padding: 3rem 0 1rem;
  }
}

.mobile-info__left,
.mobile-info__right {
  width: 50%;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobile-info__left {
  @media (max-width: 420px) {
    width: 90%;
    text-align: center;
    margin-bottom: 2rem;
  }
}

.mobile-info__right {
  @media (max-width: 420px) {
    height: 18rem;
    width: 90%;
    margin-bottom: 2rem;
  }
}

.mobile-info__right-img {
  max-height: 25rem;

  @media (max-width: 420px) {
    max-height: 20rem;
  }
}

.plan-mobile__header {
  font-family: var(--f-header);
  font-size: 2.5rem;
  line-height: 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 420px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
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

.content__layout-wrap {
  margin-top: 2rem;
  margin-right: 5rem;
}

.content__layout {
  width: 100%;
  max-height: 100%;

  @media (max-width: 1620px) {
    max-height: 40rem;
  }

  @media (max-width: 1520px) {
    max-height: 36rem;
  }

  @media (max-width: 1420px) {
    max-height: 32rem;
  }

  @media (max-width: 1320px) {
    max-height: 28rem;
  }

  @media (max-width: 900px) {
    max-height: 22rem;
  }
}

.content__first,
.content__second {
  display: flex;
  justify-content: space-between;
}

.content__primary-header,
.content__secondary-header {
  font-family: var(--f-header);
  font-size: 3rem;
  line-height: 3.4rem;
  width: 50%;

  @media (max-width: 1320px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
}

.content__secondary-header {
  font-size: 2.2rem;
}
</style>

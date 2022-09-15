<template>
  <div class="visual-choice__background">
    <div class="wrapper v-visual-choice_info_wrap">
      <div v-if="currentSlide" class="v-visual-choice_info">
        <div class="v-visual-choice_info_first">
          <h2 class="v-visual-choice_info_primary_header">
            No. {{ currentSlide.number }}
          </h2>
          <h2 class="v-visual-choice_info_primary_header">
            price: {{ currentSlide.price.toLocaleString('en') }} £
          </h2>
        </div>
        <div class="v-visual-choice_info_second">
          <h2 class="v-visual-choice_info_secondary_header">
            {{ currentSlide.bedroom }} bedrooms
          </h2>
          <h2 class="v-visual-choice_info_secondary_header">
            total area: {{ currentSlide.totalArea }} m²
          </h2>
        </div>
        <div class="v-visual-choice_info_layout_wrap">
          <img
            class="v-visual-choice_info_layout"
            :src="`../img/layout/${currentSlide.planImg}`"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="v-visual-choice_info_plan_wrap">
      <div class="v-visual-choice_plan_mobile_info">
        <div class="v-visual-choice_plan_mobile_info_left">
          <h2 class="v-visual-choice_plan_mobile_header">
            No. {{ currentSlide.number }}
          </h2>
          <h2 class="v-visual-choice_plan_mobile_header">
            price: {{ currentSlide.price.toLocaleString('en') }} £
          </h2>
          <h2 class="v-visual-choice_plan_mobile_header">
            {{ currentSlide.bedroom }} bedrooms
          </h2>
          <h2 class="v-visual-choice_plan_mobile_header">
            total area: {{ currentSlide.totalArea }} m²
          </h2>
        </div>
        <div class="v-visual-choice_plan_mobile_info_right">
          <img
            class="v-visual-choice_plan_mobile_info_right_img"
            :src="`../img/layout/${currentSlide.planImg}`"
            alt=""
          >
        </div>
      </div>
      <div class="v-visual-choice_plan_img_wrap">
        <img class="v-visual-choice_info_plan_img" src="../static/img/chuttersnap-awL_YCtPGv4-unsplash.jpg" alt="plan">
        <svg
          class="v-visual-choice_info_plan_view_box"
          :viewBox="visualData.viewBox"
        >
          <!-- eslint-disable vue/no-v-html -->
          <a
            v-for="item in visualData.houses"
            :key="item.id"
            class="v-visual-choice_info_plan_item"
            :class="{active: currentSlide.id === item.id, fixed: isCurrentSlideFixed && currentSlide.id === item.id}"
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
.visual-choice__background {
  position: relative;
  background-color: var(--c-white);
}

.v-visual-choice_info_wrap {
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

.v-visual-choice_info {
  padding-top: 6rem;
  width: 50%;
  height: 100%;

  @media (max-width: 1320px) {
    padding-top: 3rem;
  }
}

.v-visual-choice_info_plan_wrap {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
}

.v-visual-choice_plan_img_wrap {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;

  @media (max-width: 750px) {
    width: 100%;
    background-position: center;
  }
}

.v-visual-choice_plan_mobile_info {
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

.v-visual-choice_plan_mobile_info_left,
.v-visual-choice_plan_mobile_info_right {
  width: 50%;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v-visual-choice_plan_mobile_info_left {
  @media (max-width: 420px) {
    width: 90%;
    text-align: center;
    margin-bottom: 2rem;
  }
}

.v-visual-choice_plan_mobile_info_right {
  @media (max-width: 420px) {
    height: 18rem;
    width: 90%;
    margin-bottom: 2rem;
  }
}

.v-visual-choice_plan_mobile_info_right_img {
  max-height: 25rem;

  @media (max-width: 420px) {
    max-height: 20rem;
  }
}

.v-visual-choice_plan_mobile_header {
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

.v-visual-choice_info_plan_img {
  width: 100%;
  height: auto;
  margin-bottom: -3px;
}

.v-visual-choice_info_plan_view_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.v-visual-choice_info_plan_item {
  fill: transparent;
  transition: all 0.2s;

  &.active,
  &:hover {
    fill: var(--c-white-a50);
  }

  &.fixed {
    fill: var(--c-white-a80);
  }
}

.v-visual-choice_info_layout_wrap {
  margin-top: 2rem;
  margin-right: 5rem;
}

.v-visual-choice_info_layout {
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

.v-visual-choice_info_first,
.v-visual-choice_info_second {
  display: flex;
  justify-content: space-between;
}

.v-visual-choice_info_primary_header,
.v-visual-choice_info_secondary_header {
  font-family: var(--f-header);
  font-size: 3rem;
  line-height: 3.4rem;
  width: 50%;

  @media (max-width: 1320px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
}

.v-visual-choice_info_secondary_header {
  font-size: 2.2rem;
}
</style>

<template>
  <div class="v-visual-choice_background">
    <div class="wrapper v-visual-choice_info_wrap">
      <div v-if="currentSlide" class="v-visual-choice_info">
        <div class="v-visual-choice_info_first">
          <h2>No. {{ currentSlide.number }}</h2>
          <h2>price: {{ currentSlide.price.toLocaleString('en') }} £</h2>
        </div>
        <div class="v-visual-choice_info_second">
          <h2>{{ currentSlide.bedroom }} bedrooms</h2>
          <h2>total area: {{ currentSlide.totalArea }} m²</h2>
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
      <div class="v-visual-choice_info_plan_img_wrap">
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
            :class="{__active: currentSlide.id === item.id, __fixed: isCurrentSlideFixed && currentSlide.id === item.id}"
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
  name: 'VVisualChoice',
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

<style scoped>
.v-visual-choice_background {
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
}
.v-visual-choice_info {
  padding-top: 6rem;
  width: 50%;
  height: 100%;
  @media (max-width: 1320px) {
    padding-top: 3rem;
  }
  & h2 {
    font-family: var(--f-header);
    font-size: 3rem;
    line-height: 3.4rem;
    @media (max-width: 1320px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
}
.v-visual-choice_info_plan_wrap {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}
.v-visual-choice_info_plan_img_wrap {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
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
  transition: all .2s;
  &.__active,
  &:hover {
    fill: color-mod(var(--c-white) a(50%));
  }
  &.__fixed {
    fill: color-mod(var(--c-white) a(80%));
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
}
.v-visual-choice_info_first,
.v-visual-choice_info_second {
  display: flex;
  justify-content: space-between;
  & h2 {
    width: 50%;
  }
}
</style>

<template>
  <div>
    <slot />
    <div class="v-range" :class="{ __price: price }">
      <div class="v-range_input-wrapper">
        <mask-input
          v-for="(input, index) in options.value"
          :key="index"
          class="v-range_input"
          :mask="Number"
          :scale="scale"
          thousands-separator=" "
          :pad-fractional-zeros="!!scale"
          :value="input"
          @change.native="onInput($event, index)"
        />
      </div>
      <div class="v-range_slider">
        <vue-slider
          ref="range"
          v-bind="options"
          :value="options.value"
          @dragging="onCallback"
          @drag-start="edited = true"
          @drag-end="onSlide"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { IMaskComponent as MaskInput } from 'vue-imask'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import { makeNum } from 'assets/utils'

export default {
  components: { VueSlider, MaskInput },
  props: {
    price: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      required: true
    },
    interval: {
      type: Array,
      required: true
    },
    step: { type: [String, Number], default: '1' }
  },
  data () {
    return {
      edited: false,
      scale: 0,
      options: {
        value: [],
        min: 0,
        max: 100,
        interval: 1,
        fixed: false,
        processDragable: true,
        tooltip: 'none',
        dotSize: 16,
        height: 2,
        clickable: false,
        processStyle: {
          backgroundColor: '#B4B4B4'
        },
        bgStyle: {
          backgroundColor: '#B4B4B4',
          borderRadius: 0
        },
        sliderStyle: {
          padding: 0,
          backgroundColor: '#fff',
          borderRadius: '2px',
          width: '16px',
          height: '16px',
          transform: 'rotate(45deg)',
          border: '1px solid #C4C4C4',
          boxShadow: 'none'
        }
      }
    }
  },
  watch: {
    value () {
      this.options.value = this.value.slice()
    },
    edited () {
      this.options.processStyle.backgroundColor = this.edited ? '#212121' : 'transparent'
      this.options.sliderStyle.backgroundColor = '#212121'
      this.options.sliderStyle.border = '2px solid #fff'
    }
  },
  created () {
    this.initSlider()
    this.setFractial()
  },
  methods: {
    onCallback (data) {
      this.options.value = data.map((val) => {
        return (Math.round(val * 100) / 100) + ''
      })
    },
    onInput (e, index) {
      this.edited = true
      let value = e.target.value
      if (value) {
        value = makeNum(value.replace(/,/g, '.'))
      } else {
        value = index === 0 ? this.options.min : this.options.max
      }
      if (index === 0) { // minimum input value
        if (value > this.options.value[1]) {
          value = this.options.value[1]
        } else if (value < this.options.min) {
          value = this.options.min
        }
      } else if (index === 1) { // maximum input value
        if (value < this.options.value[0]) {
          value = this.options.value[0]
        } else if (value > this.options.max) {
          value = this.options.max
        }
      }
      e.target.value = value
      this.options.value[index] = +value
      this.$refs.range.setValue(this.options.value)

      this.$emit('input', this.options.value)
    },
    onSlide () {
      this.$emit('input', this.options.value)
    },
    setFractial () {
      this.options.value.forEach((input) => {
        const scale = (input + '').split('.')[1]
        if (scale && scale.length > this.scale) {
          this.scale = scale.length
        }
      })
    },
    initSlider () {
      const obj = {
        min: +this.interval[0],
        max: +this.interval[1],
        interval: +this.step,
        value: [this.value[0], this.value[1]]
      }
      this.options = Object.assign(this.options, obj)
    }
  }
}
</script>
<style lang="postcss">
.v-range {
  position: relative;
  background: var(--c-white);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 5px 5px 10px rgba(165, 132, 142, 0.3), inset -5px -5px 10px rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  width: 280px;
  height: 5rem;
}

.v-range_input-wrapper {
  display: flex;
}

.v-range_input {
  background-color: transparent;
  color: var(--c-white);
  font-size: 1.6rem;
  line-height: 1.9rem;
  border: none;
  width: 135px;
  padding: 14px 20px 3px;

  &:last-child {
    text-align: right;
  }

  &:focus {
    outline: none;
    color: color-mod(var(--c-black) a(15%));
  }
}

.vue-slider {
  padding: 13px 0 !important;
  height: 2px !important;
}

.vue-slider-rail {
  border-radius: 4px;
  background-color: color-mod(var(--c-black) a(20%));
  width: 278px;
  left: -1px;
}

.vue-slider-process {
  height: 2px !important;
  background-color: var(--c-orange) !important;
}

.vue-slider-dot {
  width: 17px;
  height: 17px;
  z-index: 1;
}

.vue-slider-dot-handle {
  border: 3px solid var(--c-white);
  background-color: var(--c-black);
  width: 17px;
  height: 17px;
  box-shadow: 5px 5px 10px rgba(165, 132, 142, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.9);
  &:focus,
  &:active {
    box-shadow: none;
  }
  &:hover {
    border: 1px solid var(--c-white);
    background-color: var(--c-black);
  }
}
</style>

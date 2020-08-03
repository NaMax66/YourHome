<template>
  <div class="v-filter_background">
    <div class="wrapper">
      <div class="v-filter_wrap">
        <div v-if="houses" class="v-filter_list">
          <v-table :head="tableHead" :body="houses" />
        </div>
        <div class="v-filter_controls">
          <div class="v-filter_checkbox_wrap">
            <label for="1"><input id="1" v-model="checkedBedrooms" value="1" type="checkbox"></label>
            <label for="2"><input id="2" v-model="checkedBedrooms" value="2" type="checkbox"></label>
            <label for="3"><input id="3" v-model="checkedBedrooms" value="3" type="checkbox"></label>
            <label for="4"><input id="4" v-model="checkedBedrooms" value="4" type="checkbox"></label>
          </div>
          <VueSliderComponent
            v-model="priceRange"
            :options="options"
            :value="options.value"
            @dragging="setRange"
          />
          <VueSliderComponent
            v-model="areaRange"
            :options="options"
            :value="options.value"
            @dragging="setRange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTable from './VTable'
const components = {}
if (process.client) {
  components.VueSliderComponent = require('vue-slider-component')
  require('vue-slider-component/theme/antd.css')
}
export default {
  name: 'VFilter',
  components: {
    VTable,
    ...components
  },
  props: {
    filterData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    houses: null,
    checkedBedrooms: [],
    priceRange: [1, 100],
    areaRange: [1, 50],
    tableHead: [
      {
        id: 1,
        title: 'No.',
        objectKey: 'number'
      },
      {
        id: 2,
        title: 'Price',
        objectKey: 'price',
        units: '£'
      },
      {
        id: 3,
        title: 'Bedrooms',
        objectKey: 'bedroom'
      },
      {
        id: 4,
        title: 'Total area',
        objectKey: 'totalArea',
        units: 'm²'
      },
      {
        id: 5,
        isButton: true
      }
    ],
    options: {
      min: 0,
      max: 0,
      interval: 1,
      fixed: false,
      processDragable: true,
      dotSize: 16,
      height: 2,
      clickable: false
    }
  }),
  created () {
    this.houses = this.filterData.houses
    this.initFilterRange()
  },
  methods: {
    setRange (value) {
    },
    initFilterRange () {
      this.options.min = this.houses[0].price
      this.options.max = this.houses[0].price
      this.houses.map((el) => {
        if (el.price < this.options.min) {
          this.options.min = el.price
        }
        if (el.price > this.options.max) {
          this.options.max = el.price
        }
      })
    }
  }
}
</script>

<style scoped>
  .v-filter_background {
    background-color: var(--c-white);
  }
  .v-filter_wrap {
    display: flex;
    align-items: flex-start;
    height: 100%;
  }
  .v-filter_list {
    width: 50%;
  }
  .v-filter_controls {
    width: 50%;
    height: auto;
    position: sticky;
    top: 6rem;
  }

</style>

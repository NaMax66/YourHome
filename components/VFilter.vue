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
            v-if="priceRangeOptions"
            v-bind="priceRangeOptions"
            :value="priceRangeOptions.value"
            @dragging="setPriceRange"
          />
          <VueSliderComponent
            v-if="areaRangeOptions"
            v-bind="areaRangeOptions"
            :value="areaRangeOptions.value"
            @dragging="setAreaRange"
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
    priceRangeOptions: null,
    areaRangeOptions: null
  }),
  created () {
    this.houses = this.filterData.houses
    this.initFilterRange()
  },
  methods: {
    setPriceRange (value) {
    },
    setAreaRange (value) {
    },
    initFilterRange () {
      const priceRange = this.getRange('price', this.houses)
      const areaRange = this.getRange('totalArea', this.houses)
      this.setRangeOptions('priceRangeOptions', priceRange, 1000)
      this.setRangeOptions('areaRangeOptions', areaRange)
    },
    setRangeOptions (key, range, interval = 1) {
      this[key] = {
        value: range,
        min: range[0],
        max: range[1],
        interval,
        fixed: false,
        processDragable: true,
        dotSize: 16,
        height: 2,
        clickable: false
      }
    },
    getRange (key, array) {
      const minPrice = array.reduce((prev, cur) => {
        return (prev[key] < cur[key]) ? prev : cur
      })[key]
      const maxPrice = array.reduce((prev, cur) => {
        return (prev[key] > cur[key]) ? prev : cur
      })[key]
      return [minPrice, maxPrice]
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

<template>
  <div class="v-filter_background">
    <div class="wrapper">
      <div class="v-filter_wrap">
        <div class="v-filter_list">
          <v-table :head="tableHead" :body="filterData.houses" />
        </div>
        <div class="v-filter_controls">
          <div class="v-filter_checkbox_wrap">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
            <input type="checkbox">
          </div>
          <VueSliderComponent
            :options="options"
            :value="options.value"
            @dragging="setRange"
          />
          <VueSliderComponent
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
    tableHead: [
      {
        id: 1,
        title: 'No.',
        objectKey: 'number'
      },
      {
        id: 2,
        title: 'Price',
        objectKey: 'price'
      },
      {
        id: 3,
        title: 'Bedrooms',
        objectKey: 'bedroom'
      },
      {
        id: 4,
        title: 'Total area',
        objectKey: 'totalArea'
      }
    ],
    options: {
      value: [1, 30],
      min: 0,
      max: 100,
      interval: 1,
      fixed: false,
      processDragable: true,
      dotSize: 16,
      height: 2,
      clickable: false
    }
  }),
  methods: {
    setRange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .v-filter_background {
    background-color: var(--c-white);
    height: 70rem;
  }
  .v-filter_wrap {
    display: flex;
  }
  .v-filter_list {
    width: 50%;
  }
  .v-filter_controls {
    width: 50%;
  }

</style>

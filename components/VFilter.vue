<template>
  <div class="v-filter_background">
    <div class="wrapper">
      <div class="v-filter_wrap">
        <div v-if="houses && houses.length" class="v-filter_list">
          <v-table :head="tableHead" :body="houses" @buy="handleBuy" />
        </div>
        <div v-else class="v-filter_list_msg">
          <h2>
            No matching
          </h2>
        </div>
        <div class="v-filter_controls">
          <div class="v-filter_checkbox_wrap">
            <label for="2">
              <input id="2" v-model="checkedBedrooms" class="v-filter_checkbox_input" value="2" type="checkbox">
              <span class="v-filter_checkbox_item">2</span>
            </label>
            <label for="3">
              <input id="3" v-model="checkedBedrooms" class="v-filter_checkbox_input" value="3" type="checkbox">
              <span class="v-filter_checkbox_item">3</span>
            </label>
            <label for="4">
              <input id="4" v-model="checkedBedrooms" class="v-filter_checkbox_input" value="4" type="checkbox">
              <span class="v-filter_checkbox_item">4</span>
            </label>
            <h3 class="v-filter_bedrooms_header">
              Bedrooms
            </h3>
          </div>
          <div class="v-filter_price">
            <vue-slider-component
              v-if="priceRangeOptions"
              v-model="priceRange"
              v-bind="priceRangeOptions"
              :value="priceRangeOptions.value"
              @dragging="filterHouses"
            />
            <h3 class="v-filter_price_header">
              Price, £
            </h3>
          </div>
          <div class="v-filter_area">
            <vue-slider-component
              v-if="areaRangeOptions"
              v-model="areaRange"
              v-bind="areaRangeOptions"
              :value="areaRangeOptions.value"
              @dragging="filterHouses"
            />
            <h3 class="v-filter_area_header">
              Total area, m²
            </h3>
          </div>
        </div>
      </div>
    </div>
    <v-modal v-show="isModalOpen" :is-success-shown="isSuccessShown" @close="closeModal" @submit="submitModal">
      <template v-slot:info>
        <h2 v-if="currentHouse" class="v-filter_modal_header">
          You choose house No. {{ currentHouse.number }}
          <br> With the price: {{ currentHouse.price.toLocaleString('en') }} £
        </h2>
        <p class="v-filter_modal_info">
          Please, enter your name and phone<br>
          so we could contact you
        </p>
        <input type="text" placeholder="Your name" class="v-filter_modal_input">
        <input type="tel" pattern="[0-9]*" placeholder="Your phone" novalidate class="v-filter_modal_input">
      </template>
      <template v-slot:button>
        Submit
      </template>
      <template v-slot:thanks>
        <p class="v-filter_modal_info">
          Thank you. We will call you soon!
        </p>
      </template>
    </v-modal>
  </div>
</template>

<script>
import VTable from './VTable'
import VModal from './VModal'

const components = {}
if (process.client) {
  components.VueSliderComponent = require('vue-slider-component')
  require('vue-slider-component/theme/antd.css')
}
export default {
  name: 'VFilter',
  components: {
    VTable,
    VModal,
    ...components
  },
  props: {
    filterData: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isModalOpen: false,
    isSuccessShown: false,
    houses: null,
    priceRange: null,
    areaRange: null,
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
    areaRangeOptions: null,
    currentHouse: null
  }),
  watch: {
    checkedBedrooms () {
      this.filterHouses()
    }
  },
  created () {
    this.houses = this.filterData.houses
    this.initFilterRange()
  },
  methods: {
    filterByBedrooms (arr, key) {
      let filteredArray = []
      if (key.length) {
        key.map((roomSize) => {
          arr.map((house) => {
            if (house.bedroom === +roomSize) {
              filteredArray.push(house)
            }
          })
        })
      } else {
        filteredArray = arr
      }
      return filteredArray
    },
    filterByRange (objectKey, arr, key) {
      const filteredArray = []
      arr.map((el) => {
        if (el[objectKey] >= key[0] && el[objectKey] <= key[1]) {
          filteredArray.push(el)
        }
      })
      return filteredArray
    },
    filterHouses () {
      let filteredFlats = this.filterData.houses
      filteredFlats = this.filterByBedrooms(filteredFlats, this.checkedBedrooms)
      filteredFlats = this.filterByRange('price', filteredFlats, this.priceRange)
      filteredFlats = this.filterByRange('totalArea', filteredFlats, this.areaRange)
      this.houses = filteredFlats
    },
    initFilterRange () {
      const priceRange = this.getRange('price', this.houses)
      const areaRange = this.getRange('totalArea', this.houses)
      this.setRangeOptions('priceRangeOptions', priceRange, 1000)
      this.setRangeOptions('areaRangeOptions', areaRange)
      this.priceRange = this.priceRangeOptions.value
      this.areaRange = this.areaRangeOptions.value
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
        height: 3,
        clickable: false,
        processStyle: {
          backgroundColor: '#212121'
        },
        dotStyle: {
          backgroundColor: '#F5F5F5',
          border: '2px solid #212121',
          boxShadow: 'none'
        }
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
    },
    handleBuy (item) {
      this.currentHouse = item
      this.openModal()
    },
    closeModal () {
      this.isModalOpen = false
      this.isSuccessShown = false
    },
    openModal () {
      this.isModalOpen = true
    },
    submitModal () {
      this.isSuccessShown = true
      setTimeout(() => {
        this.isSuccessShown = false
        this.isModalOpen = false
      }, 5000)
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
  .v-filter_list_msg {
    width: 50%;
    margin-top: 3rem;
    height: 9rem;
    text-align: center;
    font-size: 3rem;
    font-family: var(--f-header);
  }
  .v-filter_controls {
    width: 30rem;
    height: auto;
    position: sticky;
    top: 6rem;
    border-radius: 3px;
    border: 1px solid var(--c-black);
    padding: 2rem;
    margin-top: 4.2rem;
    margin-bottom: .9rem;
  }
  .v-filter_price {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .v-filter_area {
    margin-top: 5rem;
  }
  .v-filter_price_header,
  .v-filter_area_header,
  .v-filter_bedrooms_header {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
  .v-filter_checkbox_item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
    color: var(--c-black);
    border: 1px solid var(--c-black);
    border-radius: 3px;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    transition: all .3s;
    &:hover {
      opacity: .8;
    }
  }
  .v-filter_checkbox_input {
    display: none;
  }
  .v-filter_checkbox_input:checked {
    & + .v-filter_checkbox_item {
      background-color: var(--c-black);
      color: var(--c-white);
    }
  }
  .v-filter_modal_info {
    font-size: 2.5rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }
  .v-filter_modal_input {
    height: 4rem;
    font-size: 2rem;
    line-height: 2rem;
    border: none;
    border-radius: 3px;
    margin-bottom: 2rem;
    padding-left: 1rem;
    &:last-child {
      margin-bottom: 4rem;
    }
  }
  .v-filter_modal_header {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
</style>

<template>
  <div class="filter-background">
    <div class="wrapper">
      <div class="filter-wrap">
        <div class="filter-list">
          <v-table
            v-if="houses && houses.length"
            :head="tableHead"
            :body="houses"
            @buy="handleBuy"
          />
          <div v-else class="placeholder">
            <h2>
              No matching
            </h2>
          </div>
        </div>
        <div class="filter-controls">
          <div class="checkbox-wrap">
            <label for="2">
              <input
                id="2"
                v-model="checkedBedrooms"
                class="checkbox-input"
                value="2"
                type="checkbox"
              >
              <span class="checkbox-item">2</span>
            </label>
            <label for="3">
              <input
                id="3"
                v-model="checkedBedrooms"
                class="checkbox-input"
                value="3"
                type="checkbox"
              >
              <span class="checkbox-item">3</span>
            </label>
            <label for="4">
              <input
                id="4"
                v-model="checkedBedrooms"
                class="checkbox-input"
                value="4"
                type="checkbox"
              >
              <span class="checkbox-item">4</span>
            </label>
            <h3 class="bedrooms-header">
              Bedrooms
            </h3>
          </div>
          <div class="price">
            <client-only>
              <vue-slider-component
                v-if="priceRangeOptions"
                v-model="priceRange"
                v-bind="priceRangeOptions"
                :value="priceRangeOptions.value"
                @dragging="filterHouses"
              />
            </client-only>
            <h3 class="price-header">
              Price, £
            </h3>
          </div>
          <div class="area">
            <client-only>
              <vue-slider-component
                v-if="areaRangeOptions"
                v-model="areaRange"
                v-bind="areaRangeOptions"
                :value="areaRangeOptions.value"
                @dragging="filterHouses"
              />
            </client-only>
            <h3 class="area-header">
              Total area, m²
            </h3>
          </div>
        </div>
      </div>
    </div>
    <v-modal
      v-show="isModalOpen"
      :is-success-shown="isSuccessShown"
      @close="closeModal"
      @submit="submitModal"
    >
      <template #info>
        <h2 v-if="currentHouse" class="modal-header">
          You choose house No. {{ currentHouse.number }}
          <br> With the price: {{ currentHouse.price.toLocaleString('en') }} £
        </h2>
        <p class="modal-info">
          Please, enter your name and phone<br>
          so we could contact you
        </p>
        <input type="text" placeholder="Your name" class="modal-input">
        <input
          type="tel"
          pattern="[0-9]*"
          placeholder="Your phone"
          novalidate
          class="modal-input"
        >
      </template>
      <template #button>
        Submit
      </template>
      <template #message>
        <p class="modal-info">
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
  name: 'FlatFilter',

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
        key.forEach((roomSize) => {
          arr.forEach((house) => {
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
      arr.forEach((el) => {
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

<style lang="scss" scoped>
@import "../assets/styles/mixins/media";

$tablet-max-width: 52rem;

.filter-background {
  background-color: var(--c-white);
}

.filter-wrap {
  display: flex;
  align-items: flex-start;
  height: 100%;

  @include devices(tablet) {
    flex-direction: column-reverse;
    align-items: center;
  }
}

.filter-list {
  width: 50%;
  margin-right: 3rem;
  height: 50rem;

  @include devices(tablet) {
    width: 100%;
    max-width: $tablet-max-width;
    height: 34rem;
    margin-right: 0;
  }
}

.placeholder {
  margin-top: 3rem;
  height: 9rem;
  text-align: center;
  font-size: 3rem;
  font-family: var(--f-header);

  @include devices(tablet) {
    font-size: 2.4rem;
    width: 100%;
  }
}

.filter-controls {
  width: 30rem;
  height: auto;
  position: sticky;
  top: 6rem;
  border-radius: 3px;
  border: 1px solid var(--c-black);
  padding: 2rem;
  margin-bottom: 0.9rem;

  @include devices(tablet) {
    margin-top: 0;
    width: 100%;
    max-width: $tablet-max-width;
    position: relative;
    margin-bottom: 9rem;
  }
}

.price {
  margin-top: 5rem;
  margin-bottom: 3rem;

  @include devices(tablet) {
    margin-top: 1rem;
  }
}

.area {
  margin-top: 5rem;

  @include devices(tablet) {
    margin-top: 1rem;
  }
}

.price-header,
.area-header,
.bedrooms-header {
  margin-top: 1rem;
  font-size: 1.8rem;
}

.checkbox-item {
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
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
}

.checkbox-input {
  display: none;
}

.checkbox-input:checked {
  & + .checkbox-item {
    background-color: var(--c-black);
    color: var(--c-white);
  }
}

.modal-info {
  font-size: 2.5rem;
  line-height: 3.2rem;
  margin-bottom: 2rem;
}

.modal-input {
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

.modal-header {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
</style>

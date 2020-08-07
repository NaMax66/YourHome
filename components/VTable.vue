<template>
  <div class="v-table_wrap">
    <table class="v-table_table">
      <thead>
        <tr>
          <th v-for="item in head" :key="item.id" class="v-table_head_row">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="v-table_body">
        <tr v-for="row in body" :key="row.id" class="v-table_body_row" @click="$emit('buy', row)">
          <td v-for="item in head" :key="item.id" class="v-table_body_cell">
            {{ row[item.objectKey] | getNiceNumber }} {{ item.units }}
            <v-button v-if="item.isButton && screenWidth >= 600" table-button>
              Buy
            </v-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { screenWidth } from '../assets/mixins'
import VButton from './VButton'

export default {
  name: 'VTable',
  components: { VButton },
  filters: {
    getNiceNumber (value) {
      if (typeof value === 'number') {
        value = value.toLocaleString('en')
      }
      return value
    }
  },
  mixins: [screenWidth],
  props: {
    head: {
      type: Array,
      required: true
    },
    body: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.v-table_wrap {
  height: 100%;
  overflow: auto;
  @media (max-width: 400px) {
    width: 100%;
  }
}
.v-table_table {
  border-spacing: 0 1rem;
  width: 100%;
}
.v-table_head_row {
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
}
.v-table_body {
  width: 100%;
}
.v-table_body_row {
  font-size: 2.5rem;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    & .v-table_body_cell:last-child {
      display: none;
    }
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
  color: var(--c-white);
  background-color: var(--c-black);
  &:hover {
    & .v-button {
      visibility: visible;
      opacity: 1;
    }
  }
}
.v-table_body_cell {
  padding: 2rem 3rem;
}
.v-button {
  visibility: hidden;
  opacity: 0;
}
</style>

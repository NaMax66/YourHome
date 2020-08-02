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
        <tr v-for="row in body" :key="row.id" class="v-table_body_row">
          <td v-for="item in head" :key="item.id" class="v-table_body_cell">
            {{ row[item.objectKey] | getNiceNumber }} {{ item.units }}
            <v-button v-if="item.isButton" table-button>
              Buy
            </v-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
}
.v-table_table {
  border-spacing: 0 1rem;
}
.v-table_head_row {
  font-size: 2rem;
}
.v-table_body_row {
  font-size: 2.5rem;
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

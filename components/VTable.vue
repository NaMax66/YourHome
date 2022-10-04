<template>
  <div class="v-table">
    <table class="v-table__table">
      <thead>
        <tr>
          <th v-for="item in head" :key="item.id" class="v-table__header">
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr
          v-for="row in body"
          :key="row.id"
          class="table-body__row"
          @click="$emit('buy', row)"
        >
          <td v-for="item in head" :key="item.id" class="table-body__cell">
            {{ row[item.objectKey] | getNiceNumber }} {{ item.units }}
            <v-button v-if="item.isButton && screenWidth >= 600" class="table-body__action" is-empty>
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
import { screenWidth } from '@/assets/mixins'

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

<style lang="scss" scoped>
@import "assets/mediaMixin.scss";

.v-table {
  height: 100%;
  overflow: auto;

  &__table {
    position: relative;
    border-spacing: 0 1rem;
    width: 100%;
  }

  @include devices(mobile) {
    width: 100%;
  }

  &__header {
    position: sticky;
    top: 0;
    font-size: 2rem;
    padding: 0.5rem 0;
    background-color: var(--c-white);

    @include devices(tablet) {
      font-size: 1.5rem;
    }

    @include devices(mobile) {
      font-size: 1rem;
    }
  }
}

.table-body {
  $parent: &;

  width: 100%;

  &__action {
    visibility: hidden;
    opacity: 0;
  }

  &__row {
    font-size: 2rem;

    @include devices(tablet) {
      font-size: 1.8rem;
    }

    @include devices(mobile) {
      font-size: 1.4rem;
    }

    color: var(--c-white);
    background-color: var(--c-black);

    &:hover {
      #{$parent}__action {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__cell {
    white-space: nowrap;
    padding: 1.5rem 2rem;
  }
}
</style>

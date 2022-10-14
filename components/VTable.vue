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
            <v-button v-if="item.isButton" class="table-body__action" is-empty>
              Buy
            </v-button>
            <span v-else>
              {{ row[item.objectKey] | getNiceNumber }} {{ item.units }}
            </span>
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
      return (+value).toLocaleString('en')
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

<style lang="scss" scoped>
@import "../assets/styles/mixins/media";
@import "../assets/styles/mixins/scrollbar";

$horizontal-padding: 2rem;

.v-table {
  @include scrollbar;

  height: 100%;
  overflow: auto;

  &__table {
    position: relative;
    border-spacing: 0;
    width: 100%;
  }

  @include devices(mobile) {
    width: 100%;
  }

  &__header {
    position: sticky;
    top: 0;
    font-size: 2rem;
    padding: 1rem $horizontal-padding;
    text-align: center;
    background-color: var(--c-light-gray);

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

    @include devices(tablet) {
      visibility: visible;
      opacity: 1;
    }
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

    &:nth-child(odd) {
      background-color: var(--c-black-a90);
    }

    &:hover {
      #{$parent}__action {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &__cell {
    white-space: nowrap;
    text-align: center;
    padding: 1.5rem $horizontal-padding;
  }
}
</style>

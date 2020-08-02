<template>
  <table class="v-table_wrap">
    <thead>
      <tr>
        <th v-for="item in head" :key="item.id">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in body" :key="row.id">
        <td v-for="item in head" :key="item.id">
          {{ row[item.objectKey] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'VTable',
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

</style>

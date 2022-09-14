<template>
  <svg class="v-sprite">
    <use :xlink:href="`sprite.svg#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'VSprite',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

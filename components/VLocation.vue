<template>
  <div class="v-location_wrap">
    <div class="wrapper v-location_info_wrap">
      <div class="v-location_info">
        <p class="v-location_info_txt">
          The residential area is located in the north of Birmingham city. It is away from street noise, with a feeling of comfort and peace. You and your family will have all the conditions for a quiet life. At the same time, the entire city infrastructure is at arm's length. Within walking distance are shops, schools and kindergartens, hospitals, as well as other important infrastructure.
        </p>
        <v-button table-button link="https://goo.gl/maps/fZ6zSzxPbNBP2GSf6">
          Find the area on Google Maps
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from './VButton'

export default {
  name: 'VLocation',
  components: {
    VButton
  }
}
</script>

<style scoped>
.v-location_wrap {
  background-image: url("/img/sarah-doffman-u44HcmdG0Oo-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 60rem;
}
.v-location_info_wrap {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
}
.v-location_info {
  width: 50%;
  background-color: color-mod(var(--c-black) a(50%));
  padding: 4rem 3rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
  }
}
.v-location_info_txt {
  font-size: 2.5rem;
  line-height: 3.2rem;
  color: var(--c-white);
  @media (max-width: 420px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}
.v-button {
  margin-top: 3rem;
}
</style>

<template>
  <div class="v-location">
    <div class="wrapper v-location-info-wrap">
      <div class="v-location-info">
        <p class="v-location-info__txt">
          The residential area is located in the north of Birmingham city. It is away from street noise, with a feeling of comfort and peace. You and your family will have all the conditions for a quiet life. At the same time, the entire city infrastructure is at arm's length. Within walking distance are shops, schools and kindergartens, hospitals, as well as other important infrastructure.
        </p>
        <a target="_blank" href="https://goo.gl/maps/fZ6zSzxPbNBP2GSf6">
          <v-button class="mt-3">
            Find the area on Google Maps
          </v-button>
        </a>
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

<style lang="scss" scoped>
@import "assets/styles/mixins/media";

.v-location {
  background-image: url("/img/sarah-doffman-u44HcmdG0Oo-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 60rem;
}

.v-location-info-wrap {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
}

.v-location-info {
  width: 50%;
  background-color: var(--c-black-a50);
  padding: 4rem 3rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include devices(tablet) {
    width: 100%;
  }
}

.v-location-info__txt {
  font-size: 2.5rem;
  line-height: 3.2rem;
  color: var(--c-white);

  @include devices(mobile) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}
</style>

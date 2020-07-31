<template>
  <div class="">
    <v-menu />
    <v-main-video />
    <div id="neighbourhood">
      <v-info-slider theme="dark" direction="rtl" :slides="neighbourhoodSlides" />
    </div>
    <div id="facilities">
      <v-info-slider theme="light" direction="ltr" :slides="facilitiesSlides" />
    </div>
    <v-footer />
  </div>
</template>

<script>
import VMainVideo from '../components/VMainVideo'
import VMenu from '../components/VMenu'
import VFooter from '../components/VFooter'
import VInfoSlider from '../components/VInfoSlider'
import info from '../assets/info'
export default {
  components: {
    VInfoSlider,
    VMenu,
    VMainVideo,
    VFooter
  },
  computed: {
    neighbourhoodSlides () {
      return info.neighbourhood
    },
    facilitiesSlides () {
      return info.facilities
    }
  }
}
</script>

<style>
  @import "../assets/main.css";
  #neighbourhood > .v-info-slider_background {
    padding-top: 10rem;
  }
  #facilities > .v-info-slider_background {
    padding-top: 8rem;
  }
</style>

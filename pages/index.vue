<template>
  <div>
    <v-menu />
    <v-main-video />
    <div id="neighbourhood">
      <v-info-slider theme="light" direction="ltr" :slides="neighbourhoodSlides" />
    </div>
    <div id="facilities">
      <v-info-slider theme="dark" direction="rtl" :slides="facilitiesSlides" />
    </div>
    <div id="visual_choice">
      <v-visual-choice :visual-data="visualData" />
    </div>
    <div id="interior">
      <v-info-slider theme="dark" direction="rtl" :slides="interiorSlides" />
    </div>
    <div id="house_list">
      <v-filter :filter-data="visualData" />
    </div>
    <v-feedback />
    <div id="location">
      <v-location />
    </div>
    <v-footer />
  </div>
</template>

<script>
import info from '../assets/info'
import visualData from '../assets/visualData'
import VMainVideo from '../components/VMainVideo'
import VMenu from '../components/VMenu'
import VFooter from '../components/VFooter'
import VInfoSlider from '../components/VInfoSlider'
import VVisualChoice from '../components/VVisualChoice'
import VFilter from '../components/VFilter'
import VLocation from '../components/VLocation'
import VFeedback from '../components/VFeedback'
export default {
  components: {
    VFeedback,
    VLocation,
    VVisualChoice,
    VInfoSlider,
    VMenu,
    VMainVideo,
    VFilter,
    VFooter
  },
  computed: {
    neighbourhoodSlides () {
      return info.neighbourhood
    },
    facilitiesSlides () {
      return info.facilities
    },
    interiorSlides () {
      return info.interior
    },
    visualData () {
      return visualData
    }
  }
}
</script>

<style>
  @import "../assets/main.css";
  #neighbourhood > .v-info-slider_background {
    padding-top: 10rem;
    padding-bottom: 8rem;
  }
  #facilities > .v-info-slider_background {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  #interior > .v-info-slider_background {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  #house_list > .v-filter_background {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
</style>

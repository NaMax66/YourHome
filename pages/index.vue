<template>
  <div>
    <v-menu />
    <v-main-video />
    <div id="neighbourhood">
      <v-info-slider class="pt-10 pb-8" theme="light" direction="ltr" :slides="neighbourhoodSlides" />
    </div>
    <div id="facilities">
      <v-info-slider theme="dark" direction="rtl" :slides="facilitiesSlides" />
    </div>
    <div id="visual_choice">
      <v-visual-choice :visual-data="visualData" />
    </div>
    <div id="interior">
      <v-info-slider class="pb-8 pt-8" theme="dark" direction="rtl" :slides="interiorSlides" />
    </div>
    <div id="house_list">
      <v-filter class="pb-8 pt-8" :filter-data="visualData" />
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
  name: 'Index',

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
  @import "assets/main.css";
</style>

<template>
  <div>
    <v-main-video />
    <v-info-slider
      id="neighbourhood"
      class="pt-10 pb-8"
      theme="light"
      direction="ltr"
      :slides="neighbourhoodSlides"
    />
    <v-info-slider
      id="facilities"
      class="pt-10 pb-8"
      theme="dark"
      direction="rtl"
      :slides="facilitiesSlides"
    />
    <div id="visual_choice">
      <v-visual-choice :visual-data="visualData" />
    </div>
    <v-info-slider
      id="interior"
      class="pb-8 pt-8"
      theme="dark"
      direction="rtl"
      :slides="interiorSlides"
    />
    <div id="house_list">
      <v-filter class="pb-8 pt-8" :filter-data="visualData" />
    </div>
    <v-feedback />
    <div id="location">
      <v-location />
    </div>
  </div>
</template>

<script>
import info from '../assets/info'
import visualData from '../assets/visualData'
import VMainVideo from '../components/VMainVideo'
import VInfoSlider from '../components/VInfoSlider'
import VVisualChoice from '../components/VisualChoice'
import VFilter from '../components/VFilter'
import VLocation from '../components/VLocation'
import VFeedback from '../components/VFeedback'

export default {
  name: 'IndexPage',

  components: {
    VFeedback,
    VLocation,
    VVisualChoice,
    VInfoSlider,
    VMainVideo,
    VFilter
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

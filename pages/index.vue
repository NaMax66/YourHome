<template>
  <div>
    <main-video />
    <info-slider
      :id="blockIds.neighbourhood.id"
      class="pt-10 pb-8"
      theme="light"
      direction="ltr"
      :slides="slides.neighbourhood"
    />
    <info-slider
      :id="blockIds.facilities.id"
      class="pt-10 pb-8"
      theme="dark"
      direction="rtl"
      :slides="slides.facilities"
    />
    <div :id="blockIds.visualChoice.id">
      <v-visual-choice :visual-data="visualData" />
    </div>
    <info-slider
      :id="blockIds.interior.id"
      class="pb-8 pt-8"
      theme="dark"
      direction="rtl"
      :slides="slides.interior"
    />
    <div :id="blockIds.houseList.id">
      <v-filter class="pb-8 pt-8" :filter-data="visualData" />
    </div>
    <v-feedback />
    <div :id="blockIds.location.id">
      <v-location />
    </div>
  </div>
</template>

<script>
import MainVideo from '~/components/MainVideo'
import InfoSlider from '~/components/InfoSlider'
import VVisualChoice from '~/components/VisualChoice'
import VFilter from '~/components/FlatFilter'
import VLocation from '~/components/VLocation'
import VFeedback from '~/components/VFeedback'

import slides from '~/models/slides'
import visualData from '~/models/visualData'
import blockIds from '~/models/blockIds'

export default {
  name: 'IndexPage',

  components: {
    VFeedback,
    VLocation,
    VVisualChoice,
    InfoSlider,
    MainVideo,
    VFilter
  },

  data: () => ({
    blockIds,
    visualData,
    slides
  })
}
</script>

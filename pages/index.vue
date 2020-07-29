<template>
  <div class="">
    <v-main-video />
  </div>
</template>

<script>
import VMainVideo from '../components/VMainVideo'
export default {
  components: {
    VMainVideo
  }
}
</script>

<style>
  :root {
    --f-main: "Cardo";
    --f-header: "Cinzel";
    --c-white: #F5F5F5;
  }
  @font-face {
    font-family: "Cardo";
    src: url("../static/fonts/Cardo-Regular.ttf") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "Cardo";
    src: url("../static/fonts/Cardo-Bold.ttf") format("woff");
    font-style: normal;
    font-weight: bold;
  }
  @font-face {
    font-family: "Cinzel";
    src: url("../static/fonts/Cinzel-Regular.ttf") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "Cinzel";
    src: url("../static/fonts/Cinzel-Bold.ttf") format("woff");
    font-style: normal;
    font-weight: bold;
  }
  html {
    font-size: 62.5%;
  }
</style>

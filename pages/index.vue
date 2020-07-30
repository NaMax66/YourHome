<template>
  <div class="">
    <v-menu />
    <v-main-video />
  </div>
</template>

<script>
import VMainVideo from '../components/VMainVideo'
import VMenu from '../components/VMenu'
export default {
  components: {
    VMenu,
    VMainVideo
  }
}
</script>

<style>
  :root {
    --f-main: "Lato", sans-serif;
    --f-header: "Cinzel", serif;
    --c-white: #F5F5F5;
    --c-light-gray: #BDBDBD;
    --c-black: #212121;
  }
  @font-face {
    font-family: "Lato";
    font-display: swap;
    src: url("../static/fonts/Lato-Regular.ttf") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "Lato";
    font-display: swap;
    src: url("../static/fonts/Lato-Bold.ttf") format("woff");
    font-style: normal;
    font-weight: bold;
  }
  @font-face {
    font-family: "Cinzel";
    font-display: swap;
    src: url("../static/fonts/Cinzel-Regular.ttf") format("woff");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "Cinzel";
    font-display: swap;
    src: url("../static/fonts/Cinzel-Bold.ttf") format("woff");
    font-style: normal;
    font-weight: bold;
  }
  html {
    font-size: 62.5%;
    font-family: var(--f-main);
  }
  body * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .wrapper {
    max-width: 140rem;
    margin: 0 auto;
  }
  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
</style>

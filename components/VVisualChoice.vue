<template>
  <div class="v-visual-choice_background">
    <div class="wrapper v-visual-choice_info_wrap">
      <div class="v-visual-choice_info">
        <h2>Nice two bedroom house</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur dolor earum, est eveniet ipsam iste, iure laboriosam maiores quas quod sunt? At commodi maiores minima minus sed suscipit voluptatibus!</p>
      </div>
    </div>
    <div class="v-visual-choice_info_plan_wrap">
      <div class="v-visual-choice_info_plan_img_wrap">
        <img class="v-visual-choice_info_plan_img" src="../static/img/chuttersnap-awL_YCtPGv4-unsplash.jpg" alt="plan">
        <svg class="v-visual-choice_info_plan_view_box"></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VVisualChoice',
  props: {
    visualData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.v-visual-choice_background {
  position: relative;
}
.v-visual-choice_info_wrap {
  display: flex;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.v-visual-choice_info {
  width: 50%;
}
.v-visual-choice_info_plan_wrap {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}
.v-visual-choice_info_plan_img_wrap {
  width: 50%;
  height: 100%;
  overflow: hidden;
}
.v-visual-choice_info_plan_img {
  width: 100%;
  height: auto;
}
</style>

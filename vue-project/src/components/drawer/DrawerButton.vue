<template>
  <div class="drawerButton">
    <button style="width:150%" class="button button-primary"><h2><paint/>as</h2></button>
  </div>
</template>

<script>
import paint from '../icons/paint.vue'
export default {
  name: "DrawerButton",
  components: {
      paint
  }
};
</script>

<style scoped>
.drawerButton {
  display: flex;
  position: fixed;
  right: -45px;
  top: 50%;
}
</style>

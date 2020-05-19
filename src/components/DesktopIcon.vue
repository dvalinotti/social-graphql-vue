<template>
  <div
    v-click-outside="onClickOutside"
    class="desktop-icon"
    @click="onClickInside"
  >
    <div
      :class="{ clicked: clicked }"
      class="icon-container"
    >
      <img
        src="../assets/logo.png"
        alt="Desktop icon"
      >
    </div>
    <div
      class="text-container"
      :class="{ clicked: clicked }"
    >
      <p>Social GraphQL</p>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside,
  },
  props: {
    click: {
      type: Function,
      default: () => console.log('click'),
    },
  },
  data: () => ({
    clicked: false,
  }),
  methods: {
    onClickInside() {
      this.click();
      this.$data.clicked = true;
    },
    onClickOutside() {
      this.$data.clicked = false;
    },
  },
};
</script>

<style lang="scss">
  .desktop-icon {
    width: 60px;
    height: 70px;
    position: absolute;
    left: 50px;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text-container {
      width: 100%;
      font-size: 0.8em;
      text-align: center;
      font-family: "Pixelated MS Sans Serif",Arial;
      padding: 4px;
      color: #fafafa;
    }
    .icon-container {
      width: 45px;
      padding: 4px;
    }
  }
  .clicked {
    background-color: #0053f0;
  }
</style>

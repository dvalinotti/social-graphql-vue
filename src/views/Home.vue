<template>
  <div class="home">
    <div class="desktop">
      <DesktopIcon :click="onClickIcon" />
      <transition
        appear
        name="scale-up"
      >
        <div v-if="windowOpen">
          <vue-draggable-resizable
            :parent="true"
            :w="auto"
            :h="auto"
            drag-handle=".title-bar"
            @dragging="onDrag"
          >
            <div
              class="window-container"
            >
              <div class="window">
                <div class="title-bar">
                  <div class="title-bar-text">
                    Social GraphQL
                  </div>
                  <div class="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button
                      aria-label="Close"
                      @click="closeWindow"
                    />
                  </div>
                </div>
                <Login />
              </div>
            </div>
          </vue-draggable-resizable>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable';
import Login from '../windows/Login';
import DesktopIcon from '../components/DesktopIcon';

export default {
  name: 'Home',
  components: {
    Login,
    VueDraggableResizable,
    DesktopIcon,
  },
  data: () => ({
    windowOpen: false,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    clicks: 0,
  }),
  methods: {
    onResize(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag(x, y) {
      this.x = x;
      this.y = y;
    },
    onClickIcon() {
      this.$data.clicks += 1;
      if (this.$data.clicks === 2) {
        this.$data.windowOpen = true;
        this.$data.clicks = 0;
      }
    },
    closeWindow() {
      this.$data.windowOpen = false;
    },
  },
};
</script>

<style lang="scss">
.home {
  padding-top: 45px;
  .window-container {
    margin: 0 auto;
    position: relative;
  }
  .desktop {
    position: relative;
  }
}
.scale-up-enter-active {
  transition: transform 0.1s cubic-bezier(.5,0,.7,.8),
    opacity 0.01s linear;
}
.scale-up-leave-active {
  transition: transform 0.1s cubic-bezier(.5,0,.7,.8),
    opacity 0.01s linear;
}
.scale-up-enter, .scale-up-leave-to {
  transform: scale(0.1);
  opacity: 0;
}
</style>

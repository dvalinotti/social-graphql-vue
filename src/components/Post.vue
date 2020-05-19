<template>
  <div class="window">
    <div class="title-bar">
      <div class="title-bar-text">
        {{ author }}
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" />
        <button aria-label="Maximize" />
        <button aria-label="Close" />
      </div>
    </div>
    <div class="window-body">
      <h6>{{ title }}</h6>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.title-bar {
  .title-bar-text {
    font-size: 1.125em;
  }
}
.window-body {
  padding: 1em;
  h6 {
    font-size: 1.5em;
    font-weight: 700;
    text-align: left;
    margin-bottom: 1em;
  }
  p {
    text-align: left;
    font-size: 1.125em;
  }
}
</style>

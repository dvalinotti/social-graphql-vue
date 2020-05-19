<template>
  <div
    id="loading-body"
    class="window-body"
  >
    <pre>
      Microsoft&#10094;R&#10095; Windows DOS
      &#10094;C&#10095; Copyright Microsoft Corp 1990-2001.
      <br>
      C&#92;WINDOWS&#92;SYSTEM32> Logging in{{ ellipses }}
    </pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    ellipses: '',
  }),
  created() {
    for (let i = 0; i < 3; i += 1) {
      setTimeout(() => {
        this.$data.ellipses += '.';
      }, 1000 + (1000 * i));
    }
  },
};
</script>

<style lang="scss">
  #loading-body.window-body {
    margin: 0;
    overflow: hidden;
    height: 100% !important;
    text-align: left;

    pre {
      height: 100%;
      display: block;
      padding: 12px 0;
      background-color: #000;
      color: silver;
      font-size: 1rem;
      margin: -8px -24px;
      font-family: Perfect DOS VGA\ 437 Win;
      line-height: 1em;
    }
  }
</style>

<template>
  <div class="box, post">
    <div class="author-container">
      <p>{{ author }}</p>
    </div>
    <div class="content-container">
      <h6>{{ title }}</h6>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    title: String,
    body: String
  }
}
</script>

<style lang="scss">
  .post {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
    min-height: 120px;

    .author-container {
      text-align: left;
      padding: 1em;
    }

    .content-container {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      h6 {
        font-weight: 700;
        margin-bottom: 1em;
      }
    }
  }
</style>

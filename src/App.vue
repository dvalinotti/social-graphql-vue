<template>
  <div id="app">
    <section
      id="main"
      :style="{'background-image': 'url(' + require('./windows/background.jpg') + ')'}"
    >
      <div class="container">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
// import NavBar from './components/NavBar';

// export default {
//   components: {
//     NavBar,
//   },
// };
</script>

<style lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "~bulma/sass/utilities/_all";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  height: 100vh;
  width: 100%;
  background-size: cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

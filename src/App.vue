<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <section id="main">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "~bulma/sass/utilities/_all";
@import "~material-icons/iconfont/material-icons.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  padding-top: 90px;
}

#nav {
  padding: 30px;
  position: fixed;
  width: 100%;
  z-index: 99;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

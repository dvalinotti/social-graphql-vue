<template>
  <div
    v-if="!loading"
    id="login-body"
    class="window-body"
  >
    <h6>Log in</h6>
    <form
      class="form-container"
      @submit="login"
    >
      <label for="username">Username: </label>
      <input
        id="username"
        v-model="username"
        type="text"
      >
      <label for="password">Password: </label>
      <input
        id="password"
        v-model="password"
        type="password"
      >
      <button type="submit">
        Submit >>
      </button>
    </form>
  </div>
  <Loading v-else />
</template>

<script>
import gql from 'graphql-tag';
import Loading from './Loading';

export default {
  components: {
    Loading,
  },
  data: () => ({
    username: '',
    password: '',
    loading: false,
  }),
  methods: {
    async login() {
      this.$data.loading = true;
      const result = await this.$apollo.mutate({
        mutation: gql`mutation Login($username: String!, $password:String!){
          login(username:$username, password:$password){
            _id
            userId
            token
          }
        }`,
        variables: {
          username: this.$data.username,
          password: this.$data.password,
        },
      });
      if (result.data.login.token) {
        localStorage.setItem('loginToken', result.data.login.token);
        setTimeout(() => {
          this.$data.loading = false;
        }, 4000);
      }
    },
  },
};
</script>>

<style lang="scss">
.window {
  height: 450px;
  width: 600px;

  .title-bar {
    &:hover {
      cursor: pointer;
    }
  }

  #login-body.window-body {
    height: 90%;
    text-align: left;

    h6 {
      font-size: 1.5em;
      font-weight: bold;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      color: rgba(0,0,0,1);
      margin-bottom: 0.5em;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      input {
        font-family: "Pixelated MS Sans Serif",Arial;
      }
      button {
        margin-top: 1em;
      }
    }
  }
  .window-main {
    width: 100%;
    height: 100%;

  }
}
</style>

<template>
  <section id="posts">
    <div class="header">
      <b-button
        icon-left="refresh"
        size="is-medium"
      >
        Refresh
      </b-button>
      <h1 class="title">Posts</h1>
    </div>
    <div class="container">
      <div class="box" v-for="(post, index) in posts" :key="index">
        <Post
          :author="post.author"
          :title="post.title"
          :body="post.body"
        />
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Post from './Post'

export default {
  components: {
    Post
  },
  data: () => ({
    posts: []
  }),
  apollo: {
    posts: gql`
      query {
        posts {
          _id
          author
          title
          body
        }
      }
    `
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em 2em;
  }
</style>

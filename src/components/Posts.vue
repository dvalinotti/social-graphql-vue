<template>
  <section id="posts">
    <div class="header">
      <button
        icon-left="refresh"
        size="is-medium"
        type="is-success"
        outlined
        @click="refresh"
      >
        Refresh
      </button>
      <h1 class="title">
        Posts
      </h1>
      <NewPostModal />
    </div>
    <div class="container">
      <transition-group
        v-if="!loadingPosts"
        appear
        name="custom"
        tag="div"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="window-container"
          :style="{ '--i': index }"
        >
          <Post
            :author="post.author"
            :title="post.title"
            :body="post.body"
          />
        </div>
      </transition-group>
      <transition
        name="custom"
      >
        <p v-if="loadingPosts">
          Loading...
        </p>
      </transition>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag';
import Post from './Post';
import NewPostModal from './NewPostModal';

export default {
  components: {
    Post,
    NewPostModal,
  },
  data: () => ({
    posts: [],
    isModalOpen: false,
    loadingPosts: false,
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
    `,
  },
  methods: {
    refresh() {
      this.loadingPosts = true;
      setTimeout(() => {
        this.$apollo.queries.posts.refetch()
          .then(() => {
            this.loadingPosts = false;
          });
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 2em;
}
.window-container {
  padding-bottom: 1rem;
}
.custom-enter-active {
  transition: all 0.25s cubic-bezier(.5,0,.7,.8);
  transition-delay: calc(0.1s * var(--i))
}
.custom-leave-active {
  transition: all 0.25s cubic-bezier(.5,0,.7,.8);
}
.custom-enter, .custom-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>

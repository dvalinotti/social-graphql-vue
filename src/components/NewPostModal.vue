<template>
  <div>
    <button
      icon-right="file"
      size="is-medium"
      type="is-info"
      outlined
      @click="toggleOpen"
    >
      New
    </button>
    <b-modal
      :active.sync="isOpen"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-modal
      aria-role="dialog"
    >
      <div id="new-post">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              New post
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <b-field
                label="Title"
              >
                <b-input
                  v-model="title"
                  placeholder="A creative title"
                />
              </b-field>
              <b-field
                label="Body"
              >
                <b-input
                  v-model="body"
                  placeholder="An inquisitive body"
                />
              </b-field>
              <button
                icon-right="share"
                size="is-medium"
                type="is-info"
                outlined
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
    author: 'me',
    title: '',
    body: '',
  }),
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
#new-post {
  height: min-content;
  width: min-content;
  min-width: 450px;
  min-height: 200px;
}
.field label {
  text-align: left;
}
button.button {
  margin-top: 1em;
}
</style>

import Vue from 'vue';
import Buefy from 'buefy';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4001/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VueApollo);
new Vue({
  router,
  store,
  apolloProvider: new VueApollo({
    defaultClient: apolloClient,
  }),
  render: (h) => h(App),
}).$mount('#app');

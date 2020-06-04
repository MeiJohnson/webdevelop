// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App';
import router from './router';


Vue.use(firestorePlugin);
firebase.initializeApp({
  projectId: 'my-first-project-361d0',
  databaseURL: 'https://my-first-project-361d0.firebaseio.com',
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});


// eslint-disable-next-line import/prefer-default-export
export const db = firebase.firestore();

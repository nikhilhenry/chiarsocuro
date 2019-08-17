import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase/app'
import firebaseConfig from './firbaseConfig'

Vue.config.productionTip = false

// firebase intilization
firebase.initializeApp(firebaseConfig);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

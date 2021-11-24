import Vue from 'vue'
import App from './App.vue'

// Awesome Icons
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

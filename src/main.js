import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Swal from 'sweetalert2'
import store from './store'
import VueRouter from "vue-router";
import routes from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faChevronLeft);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.prototype.$http = axios;
Vue.prototype.$swal = Swal;

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

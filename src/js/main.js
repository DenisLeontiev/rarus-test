import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
    store,
    axios,
    render: h => h(App),
}).$mount('#app');

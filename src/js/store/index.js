import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';
import dataList from './modules/dataList/dataList';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dataList,
    },
    strict: true,
    plugins: [
        createPersistedState(),
    ],
});

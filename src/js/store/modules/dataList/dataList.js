/* eslint no-shadow: ["error", { "allow": ["state", "getters"] }] */

import {
    SET_LOADER,
    SET_STEP,
    SET_DATALIST,
    SET_CURRENT_ITEM,
    SET_DATAITEM_INFO,
    SET_ERROR,
} from '../../mutations-types';

const state = {
    loader: false,
    error: null,
    dataList: null,
    currentItem: null,
    dataItemInfo: null,
    secondStep: false,
};

const getters = {
    loadStatus: state => state.loader,
    errorStatus: state => state.error,
    dataList: state => state.dataList,
    currentItem: state => state.currentItem,
    dataItemInfo: state => state.dataItemInfo,
    secondStep: state => state.secondStep,
};

const mutations = {
    [SET_LOADER](state, payload) {
        state.loader = payload;
    },
    [SET_ERROR](state, payload) {
        state.error = payload;
    },
    [SET_DATALIST](state, payload) {
        state.dataList = payload;
    },
    [SET_CURRENT_ITEM](state, payload) {
        state.currentItem = payload;
    },
    [SET_DATAITEM_INFO](state, payload) {
        state.dataItemInfo = payload;
    },
    [SET_STEP](state, payload) {
        state.secondStep = payload;
    },
};

const actions = {

    async loadData({ commit }) {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'GET',
                },
            );

            const data = await response.json();

            commit('SET_DATALIST', data.slice(60));
        } catch (error) {
            commit('SET_ERROR', error);
        }
    },

    setCurrentItem({ commit }, id) {
        commit('SET_CURRENT_ITEM', id);
    },

    resetQuery({ commit }) {
        commit('SET_CURRENT_ITEM', null);
        commit('SET_STEP', false);
        commit('SET_DATAITEM_INFO', null);
    },

    async loadDataItemInfo({ commit, getters }) {
        try {
            commit('SET_STEP', true);
            commit('SET_LOADER', true);
            commit('SET_DATAITEM_INFO', null);

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${getters.currentItem}`,
                {
                    method: 'GET',
                },
            );

            const data = await response.json();

            setTimeout(() => {
                commit('SET_DATAITEM_INFO', data);
                commit('SET_LOADER', false);
            }, 300);
        } catch (error) {
            commit('SET_ERROR', error);
        }
    },

    moveBack({ commit }) {
        commit('SET_DATAITEM_INFO', null);
        commit('SET_STEP', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};

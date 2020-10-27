import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../App.vue';
import myModule from '../store/modules/dataList/dataList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
    let actions;
    let state;
    let store;
    let wrapper;

    beforeEach(() => {
        state = {
            dataItemInfo: {
                title: 'Title',
                id: 1,
            },
            secondStep: true,
            currentItem: 2,
            loadStatus: false,
        };

        actions = {
            loadDataItemInfo: jest.fn(),
            moveBack: jest.fn(),
        };

        store = new Vuex.Store({
            modules: {
                myModule: {
                    state,
                    actions,
                    getters: myModule.getters,
                },
            },
        });

        wrapper = shallowMount(App, { store, localVue });
    });

    it('Check second step', () => {
        expect(wrapper.findComponent({ name: 'ViewDataItem' }).exists()).toBe(true);
    });
});

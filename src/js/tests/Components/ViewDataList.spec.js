import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ViewDataList from '../../Components/ViewDataList.vue';
import myModule from '../../store/modules/dataList/dataList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ViewDataList', () => {
    let actions;
    let state;
    let store;
    let wrapper;

    beforeEach(() => {
        state = {
            dataList: [{
                title: 'Title',
                id: 1,
            }],
            currentItem: null,
        };

        actions = {
            loadData: jest.fn(),
            setCurrentItem() {
                state.currentItem = 1;
            },
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

        wrapper = shallowMount(ViewDataList, { store, localVue });
    });

    it('Data setting check', () => {
        expect(wrapper.find('.view-data-list__item:not(.view-data-list__item--none)').exists()).toBe(true);
    });

    it('Button status check', async () => {
        expect(wrapper.find('.button[disabled]').exists()).toBe(true);
        const item = wrapper.find('.view-data-list__item:not(.view-data-list__item--none)');
        item.trigger('click');
        await wrapper;
        expect(wrapper.find('.button[disabled]').exists()).toBe(false);
    });
});

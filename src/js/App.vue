<template>
    <div class="view-app">
        <div class="view-app__container">
            <header class="view-app__header">
                <h1 
                    v-if="loadStatus"
                    class="view-app__header__title"
                >
                    Loading...
                </h1>
                <template
                    v-else
                >
                    <div
                        v-if="dataItemInfo"
                        @click.prevent="moveBack"
                        class="view-app__header__nav"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 8.99992C16.3855 8.99992 16.8333 9.44763 16.8333 9.99992C16.8333 10.5522 16.3855 10.9999 15.8333 10.9999V8.99992ZM4.16658 9.99992L3.45948 10.707C3.27194 10.5195 3.16658 10.2651 3.16658 9.99992C3.16658 9.7347 3.27194 9.48035 3.45948 9.29281L4.16658 9.99992ZM7.62614 5.12615C8.01667 4.73562 8.64983 4.73562 9.04036 5.12615C9.43088 5.51667 9.43088 6.14983 9.04036 6.54036L7.62614 5.12615ZM9.04036 13.4595C9.43088 13.85 9.43088 14.4832 9.04036 14.8737C8.64983 15.2642 8.01667 15.2642 7.62614 14.8737L9.04036 13.4595ZM15.8333 10.9999H4.16658V8.99992H15.8333V10.9999ZM3.45948 9.29281L7.62614 5.12615L9.04036 6.54036L4.87369 10.707L3.45948 9.29281ZM4.87369 9.29281L9.04036 13.4595L7.62614 14.8737L3.45948 10.707L4.87369 9.29281Z" fill="white"/>
                        </svg>
                        Подходящие решения
                    </div>
                    <h1 class="view-app__header__title">
                        <span class="view-app__header__step">
                            {{ secondStep ? 2 : 1 }}/2
                        </span> 
                        {{ secondStep ? 'Вы получите следующие функции' : 'Какая у вас АТС?' }}
                    </h1>
                </template>
            </header>

            <div class="view-app__body">
                <template
                    v-if="!dataItemInfo && !secondStep"
                >
                    <ViewDataList 
                        :activeItemId="activeItemId"
                        @nextStep="nextStep"
                    />
                </template>
                <ViewDataItem 
                    v-if="dataItemInfo && secondStep"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ViewDataList from './Components/ViewDataList.vue';
import ViewDataItem from './Components/ViewDataItem.vue';

export default {
    name: 'App',
    data() {
        return {
            activeItemId: null,
        }
    },
    components: {
        ViewDataList,
        ViewDataItem
    },
    computed: {
        ...mapGetters(['loadStatus', 'dataItemInfo', 'currentItem', 'secondStep'])
    },
    methods: {
        ...mapActions(['loadDataItemInfo', 'moveBack']),

        async nextStep() {
            this.loadDataItemInfo();
        }
    }
}
</script>
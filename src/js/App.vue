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
                    <ViewDataList />
                    <button 
                        @click.prevent="nextStep"
                        class="button" 
                        :disabled="!currentItem"
                    >
                        Перейти к следующему шагу
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13V11ZM19 12L19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L19 12ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289C12.9024 6.68342 12.9024 7.31658 13.2929 7.70711L14.7071 6.29289ZM13.2929 16.2929C12.9024 16.6834 12.9024 17.3166 13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071L13.2929 16.2929ZM5 13H19V11H5V13ZM19.7071 11.2929L14.7071 6.29289L13.2929 7.70711L18.2929 12.7071L19.7071 11.2929ZM18.2929 11.2929L13.2929 16.2929L14.7071 17.7071L19.7071 12.7071L18.2929 11.2929Z" fill="white"/>
                        </svg>
                    </button>
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
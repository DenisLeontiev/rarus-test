<template>
    <div>
        <ul class="view-data-list">
            <li 
                @click.prevent="resetItem"
                class="view-data-list__item view-data-list__item--none"
            >
                У меня нет АТС
            </li>
            <li 
                v-for="(item, index) in dataList"
                :key="index"
                :class="['view-data-list__item', currentItem == item.id ? 'is-active' : '']"
                :data-id="item.id"
                @click.prevent="selectItem($event)"
            >
                {{ item.title }}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#0096F2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6875 14.75C9.35938 14.75 9.03125 14.625 8.76875 14.375L6.14375 11.875C5.61875 11.375 5.61875 10.625 6.14375 10.125C6.66875 9.625 7.52188 9.625 7.98125 10.125L9.6875 11.75L14.0188 7.625C14.5437 7.125 15.3313 7.125 15.8562 7.625C16.3813 8.125 16.3813 8.875 15.8562 9.375L10.6063 14.375C10.3438 14.625 10.0156 14.75 9.6875 14.75Z" fill="#E5F5FE"/>
                </svg>
            </li>
        </ul>

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
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ViewDataList',
    props: {
        status: String,
    },
    computed: {
        ...mapGetters(['dataList', 'currentItem'])
    },
    methods: {
        ...mapActions(['loadData', 'setCurrentItem', 'moveBack', 'loadDataItemInfo', 'resetQuery']),

        selectItem(event) {
            const id = event.target.dataset.id;
            this.setCurrentItem(id);

            if (this.status == 'modal') {
                this.loadDataItemInfo();
            }
        },

        resetItem() {
            this.resetQuery();
        },

        nextStep() {
            this.$emit('nextStep');
        }
    },
    created() {
        this.loadData();
    },
}
</script>
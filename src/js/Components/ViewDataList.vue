<template>
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
    },
    async mounted() {
        this.loadData();
    },
}
</script>
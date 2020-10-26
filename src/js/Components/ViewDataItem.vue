<template>
    <div class="view-data-item">
        <div 
            v-if="showModal"
            class="view-data-item__modal__back"
            @click.prevent="closeModal"
        >
        </div>
        <ul class="view-data-item__header">
            <li>Модель АТС: 
                <div class="link">
                    <span
                        @click.prevent="openModal"
                        class="js-open-modal"
                    >
                        {{ dataItemInfo.title }}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0533 6.00019L8 9.05352L4.94 6.00019L4 6.94019L8 10.9402L12 6.94019L11.0533 6.00019Z" fill="#0096F2"/>
                        </svg>
                    </span>
                    <div 
                        v-if="showModal"
                        class="view-data-item__modal"
                    >
                        <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 5.99996C18 5.99996 18 5.99997 18 5.99998C18 5.99999 18 6 18 6H2.14577e-05C1.01252e-05 6 0 5.99999 0 5.99998C0 5.99997 9.18204e-06 5.99996 2.05145e-05 5.99996H1.57879C2.88753 5.99996 4.05803 4.44106 5.06882 3.09487C5.40572 2.64618 5.72487 2.22113 6.02549 1.88529L6.8262 0.990788C8.00873 -0.330263 9.99127 -0.330262 11.1738 0.990788L11.9745 1.88529C12.2751 2.22113 12.5943 2.64618 12.9312 3.09487C13.942 4.44107 15.1125 5.99996 16.4212 5.99996H18Z" fill="white"/>
                        </svg>
                        <div class="view-data-item__modal__wrapper">
                            <ViewDataList 
                                status="modal"
                            />
                        </div>
                    </div>
                </div>
            </li>
            <li>
                Программа 1С: <b>Управление нашей фирмой</b>
            </li>
            <li>
                Подходящие решения: <b>Интеграция с телефонией</b>
            </li>
        </ul>

        <div class="view-data-item__body">
            <h2 class="view-data-item__body__title">
                Интеграция с телефонией
            </h2>
            <ViewDataItemOptions 
                :data="options"
            />
        </div>

        <div class="view-data-item__footer">
            <div class="view-data-item__footer__title">
                Ссылки на инструкции:
            </div>
            <ul class="view-data-item__footer__links">
                <li>
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9241 3.61722C12.8757 3.50014 12.804 3.3904 12.7092 3.29502C12.7078 3.2936 12.7064 3.29219 12.705 3.29078C12.5242 3.11106 12.2751 3 12 3H11.9999H6C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H9.58579L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L11 6.41421V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V4.00069C13 3.99946 13 3.99823 13 3.997C12.9996 3.86774 12.9743 3.73854 12.9241 3.61722Z" fill="#006DA3"/>
                        </svg>
                        Инструкция к АТС Mango
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9241 3.61722C12.8757 3.50014 12.804 3.3904 12.7092 3.29502C12.7078 3.2936 12.7064 3.29219 12.705 3.29078C12.5242 3.11106 12.2751 3 12 3H11.9999H6C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H9.58579L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L11 6.41421V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V4.00069C13 3.99946 13 3.99823 13 3.997C12.9996 3.86774 12.9743 3.73854 12.9241 3.61722Z" fill="#006DA3"/>
                        </svg>
                        Инструкция к АТС Яндекс
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9241 3.61722C12.8757 3.50014 12.804 3.3904 12.7092 3.29502C12.7078 3.2936 12.7064 3.29219 12.705 3.29078C12.5242 3.11106 12.2751 3 12 3H11.9999H6C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H9.58579L3.29289 11.2929C2.90237 11.6834 2.90237 12.3166 3.29289 12.7071C3.68342 13.0976 4.31658 13.0976 4.70711 12.7071L11 6.41421V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V4.00069C13 3.99946 13 3.99823 13 3.997C12.9996 3.86774 12.9743 3.73854 12.9241 3.61722Z" fill="#006DA3"/>
                        </svg>
                        Инструкция к АТС iToolabs
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ViewDataList from './ViewDataList.vue';
import ViewDataItemOptions from './ViewDataItemOptions.vue';

export default {
    name: 'ViewDataItem',
    data() {
        return {
            showModal: false,
            options: {
                success: [
                    'Получение информации о звонках',
                    'Создать исходящий звонок',
                    'Положить трубку',
                    'Постановка на удержание',
                    'Перевод безусловный',
                    'Перевод безусловный',
                    'Перевод условный',
                    'Динамическая маршрутизация командой перевода',
                ],
                unsuccess: [
                    'Получение информации о звонках',
                    'Создать исходящий звонок',
                    'Положить трубку',
                ]
            }
        }
    },
    components: {
        ViewDataItemOptions,
        ViewDataList,
    },
    computed: {
        ...mapGetters(['dataItemInfo'])
    },
    methods: {
        ...mapActions(['loadData', 'setCurrentItem']),

        openModal() {
            this.showModal = true;
        },

        closeModal() {
           this.showModal = false;
        }
    },
    async mounted() {
        this.loadData();
    },
}
</script>
<template>
    <div class="view-data-item__options">
        <div class="view-data-item__options__column">
            <div class="view-data-item__options__title view-data-item__options__title--green">
                Поддерживаемые функции:
            </div>
            <ul class="view-data-item__options__list">
                <li
                    v-for="(item, index) in data.success"
                    :key="index"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.1" width="24" height="24" rx="8" fill="#0096F2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6875 15.75C10.3594 15.75 10.0312 15.625 9.76875 15.375L7.14375 12.875C6.61875 12.375 6.61875 11.625 7.14375 11.125C7.66875 10.625 8.52188 10.625 8.98125 11.125L10.6875 12.75L15.0188 8.625C15.5437 8.125 16.3313 8.125 16.8562 8.625C17.3813 9.125 17.3813 9.875 16.8562 10.375L11.6063 15.375C11.3438 15.625 11.0156 15.75 10.6875 15.75Z" fill="#0096F2"/>
                    </svg>
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="view-data-item__options__column">
            <div class="view-data-item__options__title view-data-item__options__title--red">
                Неподдерживаемые функции:
            </div>
            <ul class="view-data-item__options__list">
                <li
                    v-for="(item, index) in data.unsuccess"
                    :key="index"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="8" fill="#F2F2F2"/>
                        <path d="M15.9507 9.56213C16.3684 9.14437 16.3685 8.46706 15.9507 8.0493C15.5329 7.63155 14.8556 7.63155 14.4379 8.0493L12 10.4872L9.56213 8.0493C9.14437 7.63155 8.46706 7.63155 8.0493 8.0493C7.63155 8.46706 7.63155 9.14437 8.0493 9.56212L10.4872 12L8.0493 14.4379C7.63155 14.8556 7.63155 15.5329 8.0493 15.9507C8.46706 16.3685 9.14437 16.3685 9.56212 15.9507L9.20857 15.5971L9.56212 15.9507L12 13.5128L14.4379 15.9507C14.8556 16.3684 15.5329 16.3685 15.9507 15.9507L15.5971 15.5971L15.9507 15.9507C16.3685 15.5329 16.3685 14.8556 15.9507 14.4379L13.5128 12L15.9507 9.56213Z" fill="#929AA3" stroke="#929AA3"/>
                    </svg>
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ViewDataItemOptions',
    props: {
        data: Object,
    }
}
</script>
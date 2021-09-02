<template>
    <div id="wrapper">
        <a-progress
            type="circle"
            :width="150"
            :status="status"
            :percent="percent"
        />
        <div>{{ message }}</div>
        <a v-if="url.length > 0" target="_blank" :href="`/archive/${url}`">Скачать</a>
    </div>
</template>

<script>
export default {
    name: "Progress",
    data: function () {
        return {
            url: '',
            percent: 0,
            message: '',
            status: 'normal',
        };
    },
}
</script>

<style scoped>
#wrapper {
    min-height: 320px;
    text-align: center;
}
</style>
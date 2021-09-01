<template>
    <div id="main">
        <a-spin :spinning="loading">
            <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Настройка">
                    <Settings/>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Прогресс" disabled>
                    <Settings/>
                </a-tab-pane>
            </a-tabs>
        </a-spin>
    </div>
</template>

<script>
import Settings from "./components/Settings";

export default {
    name: 'Main',
    components: {Settings},
    data: function () {
        return {
            loading: false,
        };
    }
}
</script>

<style>
#main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
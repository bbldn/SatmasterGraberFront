<template>
    <div id="main">
        <a-spin :spinning="loading">
            <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Настройка">
                    <Settings/>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Прогресс">
                    <Progress/>
                </a-tab-pane>
            </a-tabs>
        </a-spin>
    </div>
</template>

<script>
import Settings from "./components/Settings";
import Progress from "./components/Progress";

export default {
    name: 'Main',
    components: {Settings, Progress},
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
<template>
    <div id="main">
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="Настройка">
                <Settings/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Прогресс" disabled>
                <Settings/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Settings from "./components/Settings";

export default {
    name: 'Main',
    components: {Settings},
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
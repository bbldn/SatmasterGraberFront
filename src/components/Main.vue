<template>
    <div id="main">
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="Настройка">
                <Form/>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Прогресс" disabled>
                <Form/>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Form from "./form/Form";

export default {
    name: 'Main',
    components: {Form},
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
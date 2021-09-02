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

import client from "app/context/main/services/client";
import Settings from "app/context/main/components/components/Settings";
import Progress from "app/context/main/components/components/Progress";

export default {
    name: 'Main',
    components: {Settings, Progress},
    data: function () {
        return {
            loading: true,
            state: {step: 'not-running'},
        };
    },
    created: function () {
        this.loadState();
    },
    methods: {
        updateState: function (state) {
            this.state = state;
            if ('initialization' === state.step && 'process' === state.step) {
                setTimeout(this.loadState, 1000);
            }
        },
        loadState: async function () {
            const {data} = await client.getProcessState();
            this.loading = false;
            if (null !== data.error) {
                console.log(data.error);

                return;
            }

            this.updateState(data.result);
        }
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
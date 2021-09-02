<template>
    <a-row id="main">
        <a-col>
            <a-spin :spinning="loading">
                <Settings
                    v-if="tabs.settings"

                    :state="state"
                    :updateState="updateState"
                    :updateError="updateError"
                />
                <Progress
                    v-if="tabs.progress"

                    :state="state"
                    :updateState="updateState"
                />
            </a-spin>
        </a-col>
    </a-row>
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
    computed: {
        tabs: function () {
            return {
                settings: this.state.step === 'not-running',
                progress: this.state.step !== 'not-running',
            };
        },
    },
    methods: {
        updateState: function (state) {
            this.state = state;
            this.loading = false;
            if ('error' === state.step) {
                this.$message.error(state.message);

                return;
            }

            if ('initialization' === state.step || 'process' === state.step) {
                setTimeout(this.loadState, 1000);
            }
        },
        loadState: async function () {
            const data = await client.getProcessState();
            if (null !== data.error) {
                this.updateError(data.error);

                return;
            }

            this.updateState(data.result);
        },
        updateError: function (error) {
            console.log(error);
            this.$message.error('Произошла ошибка');
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
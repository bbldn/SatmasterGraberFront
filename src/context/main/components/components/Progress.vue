<template>
    <a-row id="wrapper">
        <a-col>
            <a-progress
                type="circle"
                :width="150"
                :percent="stateC.percent"
            />
            <div>{{ stateC.message }}</div>
            <a-row v-if="stateC.url">
                <a-col>
                    <a-row>
                        <a-col>
                            <a target="_blank" :href="`/archive/${stateC.url}`">Скачать</a>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col>
                            <a-button type="primary" @click="restart">
                                Ещё раз
                            </a-button>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>
export default {
    name: "Progress",
    props: {
        state: Object,
        updateState: Function,
    },
    computed: {
        stateC: function () {
            return {
                url: this.state.url,
                percent: this.state.percent ?? 0,
                message: this.state.message ?? '',
            };
        },
    },
    methods: {
        restart: function () {
            this.updateState({step: 'not-running'});
        }
    }
}
</script>

<style scoped>
#wrapper {
    min-height: 320px;
    text-align: center;
}
</style>
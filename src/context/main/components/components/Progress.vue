<template>
    <a-row id="wrapper">
        <a-col>
            <a-progress
                type="circle"
                :width="150"
                :status="stateC.status"
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
            let status;
            let percent;

            switch (this.state.step) {
                case 'not-running':
                    percent = 0;
                    status = 'normal';
                    break;
                case 'initialization':
                    percent = 0;
                    status = 'active';
                    break;
                case 'process':
                    percent = this.state.percent;
                    status = 'active';
                    break;
                case 'finish':
                    percent = 100;
                    status = 'success';
                    break;
                default:
                    percent = 0;
                    status = 'normal';
                    break;
            }

            return {
                status: status,
                percent: percent,
                url: this.state.url,
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
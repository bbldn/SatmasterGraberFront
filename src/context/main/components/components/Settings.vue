<template>
    <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Ссылка на категорию satmaster.kiev.ua">
            <!--suppress HtmlUnknownAttribute -->
            <a-input
                placeholder="Пожайлуста, введите ссылку на категорию в satmaster.kiev.ua"
                v-decorator="['url', { rules: [{ required: true, message: 'Пожайлуста, введите ссылку на категорию в satmaster.kiev.ua' }] }]"
            />
        </a-form-item>
        <a-form-item label="Идентификатор категории в t2.kiev.ua">
            <!--suppress HtmlUnknownAttribute -->
            <a-input-number
                :min="1"
                placeholder="Пожайлуста, введите идентификатор категории в t2.kiev.ua"
                v-decorator="['categoryId', { rules: [{ required: true, message: 'Пожайлуста, введите идентификатор категории в t2.kiev.ua' }] }]"
            />
        </a-form-item>
        <a-form-item label="Путь для картинок">
            <!--suppress HtmlUnknownAttribute -->
            <a-input
                placeholder="Пожайлуста, путь для картинок"
                v-decorator="['imagePath', { rules: [{ required: true, message: 'Пожайлуста, путь для картинок' }] }]"
            />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">
                Начать
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import {Form} from 'ant-design-vue';
import Vue from "vue";
import client from "app/context/main/services/client";

Vue.use(Form);

export default {
    name: "Settings",
    data: function () {
        return {
            form: this.$form.createForm(this),
        };
    },
    mounted: function () {
        this.form.setFieldsValue({
            categoryId: 1,
            url: undefined,
            imagePath: 'catalog/prod/graber/',
        });
    },
    methods: {
        handleSubmit: function (e) {
            e.preventDefault();
            this.form.validateFields(async (err, values) => {
                if (err) {
                    return;
                }

                await client.startProcess(values.url, values.categoryId, values.imagePath);
            });
        },
    }
}
</script>

<style scoped>
a-form {
    max-width: 800px;
}
</style>
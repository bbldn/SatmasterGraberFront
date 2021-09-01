<template>
    <a-form-model :model="form">
        <a-form-item label="Ссылка на категорию satmaster.kiev.ua">
            <a-input
                v-model="form.url"
                placeholder="Пожайлуста, введите ссылку на категорию в satmaster.kiev.ua"
                v-decorator="['note', { rules: [{ required: true, message: 'Пожайлуста, введите ссылку на категорию в satmaster.kiev.ua' }] }]"
            />
        </a-form-item>
        <a-form-item label="Идентификатор категории в t2.kiev.ua">
            <a-input-number
                :min="1"
                v-model="form.categoryId"
                placeholder="Пожайлуста, введите идентификатор категории в t2.kiev.ua"
                v-decorator="['note', { rules: [{ required: true, message: 'Пожайлуста, введите идентификатор категории в t2.kiev.ua' }] }]"
            />
        </a-form-item>
        <a-form-item label="Путь для картинок">
            <a-input
                v-model="form.imagePath"
                placeholder="Пожайлуста, путь для картинок"
                v-decorator="['note', { rules: [{ required: true, message: 'Пожайлуста, путь для картинок' }] }]"
            />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">
                Начать
            </a-button>
        </a-form-item>
    </a-form-model>
</template>

<script>
export default {
    name: "Form",
    data: function () {
        return {
            form: {
                url: '',
                categoryId: 1,
                imagePath: 'catalog/prod/graber/',
            },
        };
    },
}
</script>

<style scoped>
a-form {
    max-width: 800px;
}
</style>
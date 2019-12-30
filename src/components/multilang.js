export default {
    name: 'multilang',
    data: () => ({
        languages:[
            'en',
            'cn'
        ]
    }),
    template: '<ul><li v-for="lang in languages" :key="lang" @click="changeLang(lang)">{{ lang }}</li></ul>',
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang
        }
    }
}
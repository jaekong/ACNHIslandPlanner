import Vue from 'vue'
import editor from './editor.vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        components: { editor },
        template: '<editor />'
    }).$mount('main')
})

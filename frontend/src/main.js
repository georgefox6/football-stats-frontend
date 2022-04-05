import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import CountryFlag from 'vue-country-flag'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import VueMaterial from 'vue-material'
import EpicSpinners from 'epic-spinners'
import vSelect from 'vue-select'

Vue.config.productionTip = false

Vue.use(VueApexCharts)
Vue.use(VueCustomTooltip)
Vue.use(VueMaterial)

Vue.component('apexchart', VueApexCharts)
Vue.component('country-flag', CountryFlag)
Vue.component('epic-spinners', EpicSpinners)
Vue.component('v-select', vSelect)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

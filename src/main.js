import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import CountryFlag from 'vue-country-flag'

Vue.config.productionTip = false

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.component('country-flag', CountryFlag)

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

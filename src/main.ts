import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from 'echarts'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts

Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
    // render: h => h('div', {
    //     style: {
    //         color: 'red'
    //     },
    //     on: {
    //         'click': () => {
    //             console.log(1)
    //         }
    //     }
    // }, '111')
}).$mount("#app");

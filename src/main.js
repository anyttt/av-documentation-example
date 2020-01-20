import Vue from 'vue';
import Component from './components/Component.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Component),
}).$mount('#app');

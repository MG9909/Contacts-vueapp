import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import vuetify from './plugins/vuetify';
Vue.use(vuetify, {
	options: {
		customProperties: true,
	},
	iconfont: 'mdi',
});

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		user: {},
		users: [],
		message: '',
		color: '',
		id: 1
	},
	getters: {
		message: state => state.message,
		color: state => state.color,
		user: state => state.user,
		users: state => state.users,
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setUsers(state, user) {
			user.id = state.id;
			state.id++;
			state.users.push(user);
		},
		updateUser(state, user) {
			state.users.forEach(item => {
				if (item.id == user.id) {
					item.name = user.name
				}
			})
		},
		deleteUser(state, id) {
			state.users = state.users.filter(item => item.id != id);
		},

		errorMessage(state, errorMessage) {
			state.message = errorMessage;
			state.color = 'error';
		},
		successMessage(state, successMessage) {
			state.message = successMessage;
			state.color = 'success';
		},
		infoMessage(state, infoMessage) {
			state.message = infoMessage;
			state.color = 'info';
		},
		message(state, message) {
			state.message = message;
		},
		color(state, color) {
			state.color = color;
		},

	},
});

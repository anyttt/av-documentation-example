import Vue from 'vue';

new Vue({
	data() {
		return {
			title: 'Hello',
			exampleObject: vueExampleObject
		}
	},
	methods: {
		/**
		 * This is the description of the first feature
		 * @memberof AVG.ConfirmOrderPage
		 * @feature This is the title of the first feature
		 */
		/**
		 * This is the dev description of the first method
		 * @param {Object} someObject
		 * @returns {string}
		 */
		firstMethod(someObject) {
			return someObject.toString();
		}
	},
	render: function (createElement) {
		return createElement('h1', this.title)
	}
  }).$mount('#app')

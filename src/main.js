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
		 * @memberof ConfirmOrderPage
		 * @feature This is the title of the first feature
		 */
		/**
		 * This is the dev description of the first method
		 * @memberof Dev
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

//   * @brand AVG
//   * @carttype in-app
//   * @locales en_US, pt_BR
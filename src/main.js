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
		 * This is the description of the Vue feature.
		 * @memberof ConfirmOrderPage
		 * @feature This is the title of the Vue feature
		 * @name Feature
		 */
		/**
		 * This is the dev description of the Vue method
		 * @param {Object} someObject
		 * @returns {string}
		 */
		vueMethod(someObject) {
			return someObject.toString();
		}
	},
	render: function (createElement) {
		return createElement('h1', this.title)
	}
  }).$mount('#app')

/**
 * Cookie class with Web Storage compatible API
 * @memberof Dev
 */
const CookieStorage = class {

	/**
	 * Init cookieStorage
	 */
	constructor() {
		let isCookieEnabled = (() => {
				return false;
		})();
	}

	/**
	 * Get length
	 * @returns {string}
	 */
	get length() {
		return '';
	}

	/**
	 * Return message
	 * @param {String} someString
	 * @returns {string}
	 */
	returnMessage(message = '') {
		return `Message: ${message}`;
	}
};

module.exports = CookieStorage;
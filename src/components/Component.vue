
<template>
    <div>
<!--
    /**
     * This is the description of the component
     * @name component
     */
-->
        <h1>Hello</h1>
    </div>
</template>

<script>
export default {
  methods: {
    /**
     * This is the description of the firstMethod
	 * @name feat-firstMethod
     * @param {Object} someObject
     * @returns {string}
     */
    firstMethod(someObject) {
        return someObject.toString();
	},
    /**
     * This is the description of the secondMethod
	 * @name feat-secondMethod
     * @param {Object} someObject
     * @returns {string}
     */
    secondMethod(someObject) {
        return someObject.toString();
    },
    /**
     * This is the description of the thirdMethod
	 * @name dev-thirdMethod
     * @param {Object} someObject
     * @returns {string}
     */
    thirdMethod(someObject) {
        return someObject.toString();
	}
  }
}
</script>
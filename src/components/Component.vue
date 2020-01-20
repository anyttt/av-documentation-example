
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
     * This is the description of the documentedMethod
     * @param {Object} someObject
     * @returns {string}
     */
    documentedMethod(someObject) {
        return someObject.toString();
    },
    /**
     * This is the description of the undocumentedMethod
     * @ignore
     * @param {Object} someObject
     * @returns {string}
     */
    undocumentedMethod(someObject) {
        return someObject.toString();
	}
  }
}
</script>
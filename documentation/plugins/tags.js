exports.defineTags = function(dictionary) {
    dictionary.defineTag("feature", {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
			doclet.feature = tag.value;
			doclet.name = tag.value;
        }
	});
};
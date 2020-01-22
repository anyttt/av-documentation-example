exports.defineTags = function(dictionary) {
    dictionary.defineTag("feature", {
        mustNotHaveValue: true,
        onTagged: function(doclet, tag) {
            doclet.feature = tag.text;
        }
	});
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob(
      "src/content/projects/*.md"
    );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/portfolio/"
  };
};

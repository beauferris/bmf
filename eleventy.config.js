module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy({
  //   "node_modules/govuk-frontend/dist/govuk/all.js": "assets/js/govuk.js",
  // });

  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addFilter("split", function (str, delimiter) {
    return str.split(delimiter);
  });
  return {
    dir: {
      input: "src", // or your input dir
      output: "_site",
      includes: "_includes",
    },
  };
};

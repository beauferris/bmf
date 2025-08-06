const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
const site = require("./src/_data/site"); // assume site.json exports { url: "https://yoursite.com"
module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy({
  //   "node_modules/govuk-frontend/dist/govuk/all.js": "assets/js/govuk.js",
  // });

  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://www.bmftowing.ca/",
      lastmodProperty: "date",
    },
  });

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

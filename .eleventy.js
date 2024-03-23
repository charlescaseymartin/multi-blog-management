const pluginDirectoryOutput = require("@11ty/eleventy-plugin-directory-output");
const pluginEleventyNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginDirectoryOutput);
    eleventyConfig.addPlugin(pluginEleventyNavigation);

    eleventyConfig.addPassthroughCopy("./ui/assets");

  return {
    dir: {
      includes: '_includes',
      data: '_data',
      input: './ui',
      output: './dist/public',
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: 'njk',
    templateFormats: [
      'html',
      'md',
    ],
  };
};

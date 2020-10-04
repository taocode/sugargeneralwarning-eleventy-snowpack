const pluginPWA = require("eleventy-plugin-pwa");
module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    'html',
    'njk',
    'md',
    // Static Assets:
    'css',
    'jpeg',
    'jpg',
    'png',
    'svg',
    'woff',
    'woff2',
  ]);
  // eleventyConfig.addPlugin(pluginPWA, {
  //   swDest: "./_output/service-worker.js",
  //   globDirectory: "./_output",
  //   clientsClaim: true,
  //   skipWaiting: true
  // });
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPassthroughCopy('static');
  eleventyConfig.addPassthroughCopy('site.webmanifest')
  return {
    dir: {
      input: '_template',
      includes: '../_includes',
      output: '_output',
    },
  };
};

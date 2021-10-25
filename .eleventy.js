module.exports = function (config) {
  config.addCollection("artists", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/data/artists/**/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

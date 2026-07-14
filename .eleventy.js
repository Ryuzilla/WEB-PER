module.exports = function (eleventyConfig) {
  // Ignore files that shouldn't be processed as templates
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("node_modules");
  eleventyConfig.ignores.add("_site");

  // Static passthrough copies
  eleventyConfig.addPassthroughCopy("*.html");
  eleventyConfig.addPassthroughCopy("*.xml");
  eleventyConfig.addPassthroughCopy("*.txt");
  eleventyConfig.addPassthroughCopy("stocks.html");
  eleventyConfig.addPassthroughCopy("blog/style.css");
  eleventyConfig.addPassthroughCopy("blog/post.html");
  eleventyConfig.addPassthroughCopy("blog/morning-routine-advanced.html");
  eleventyConfig.addPassthroughCopy("blog/search.html");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Filters
  eleventyConfig.addFilter("thaiDate", function (date) {
    return new Date(date).toLocaleDateString("th-TH", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("isoDate", function (date) {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("postTags", function (tags) {
    return (tags || []).filter((t) => t !== "posts");
  });

  eleventyConfig.addFilter("relatedTo", function (posts, currentUrl) {
    return (posts || [])
      .filter((p) => p.url !== currentUrl)
      .slice(0, 3);
  });

  eleventyConfig.addFilter("uniqueCategories", function (posts) {
    return [
      ...new Set((posts || []).map((p) => p.data.category).filter(Boolean)),
    ].length;
  });

  return {
    templateFormats: ["njk", "md"],
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};

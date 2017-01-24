module.exports = {
  hooks: {
    "page:before": function(page) {
      page.content = "# {{ page.title }}\n" +page.content;
      return page;
    }
  },
  book: {
    assets: './book',
    js: ['plugin.js']
  }
}

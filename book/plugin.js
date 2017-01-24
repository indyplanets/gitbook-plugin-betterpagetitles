require(["gitbook", "jQuery"], function(gitbook, $) {
  gitbook.events.bind('start', function() {
    $('.book-header h1 a').remove();
  })
})
//= require_tree .
(function() {
  var ready = function(fn) {
    if (document.readyState !== "loading")
      fn();
    else
      document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function() {
    var response_node = document.querySelector('#response');
    if (response_node) {
      var nodes = document.querySelectorAll('html, body');
      nodes.forEach(function(el) {
        var box = response_node.getBoundingClientRect();
        var top = box.top + window.pageYOffset - document.documentElement.clientTop;

        el.style.transition = 'all 0.4s';
        el.style.scrollTop  = top - 60;
      });
    }
  });
})();

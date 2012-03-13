(function() {

  $.fn.large_background_transition = function(image_list, options) {
    var $holder, $window, defaults, on_resize, resize_background, templates;
    defaults = {
      resize_delay: 200
    };
    options = $.extend(defaults, options);
    templates = {
      holder: function() {
        return '<div id="large_background_transition_holder"></div>';
      },
      image: function(id, src) {
        return '<div id="' + id + '"><img src="' + src + '"></div>';
      }
    };
    resize_background = function() {
      $holder.height(window.innerHeight);
      $holder.width(window.innerWidth);
      return console.log('works');
    };
    on_resize = function(e) {
      if (typeof window.resize_timeout === 'number') {
        window.clearTimeout(window.resize_timeout);
        delete window.resize_timeout;
      }
      return window.resize_timeout = window.setTimeout(resize_background, options.resize_delay);
    };
    this.append(templates.holder());
    $window = $(window);
    $holder = $('#large_background_transition_holder');
    $window.bind('resize', on_resize);
    return true;
  };

}).call(this);

(function() {

  $.fn.large_background_transition = function(image_list, options) {
    var $holder, $window, current_image, defaults, load_images, loaded_images, on_resize, previous_image, resize_background, templates, transition_background;
    defaults = {
      resize_delay: 20,
      transition_delay: 5000,
      fade_duration: 1000,
      image_height: 1080,
      image_width: 1920,
      scale: 'height'
    };
    options = $.extend(defaults, options);
    loaded_images = [];
    current_image = 0;
    previous_image = 0;
    templates = {
      holder: function(scale) {
        return '<div id="large_background_transition_holder" class="' + scale + '"></div>';
      },
      image: function(id, src) {
        return '<div id="' + id + '" class="large_background_transition_image"><img src="' + src + '"></div>';
      }
    };
    resize_background = function() {
      var height_ratio;
      height_ratio = window.innerHeight / window.innerWidth;
      if (height_ratio < (options.image_height / options.image_width)) {
        if (options.scale === 'height') {
          $holder.addClass('width');
          $holder.removeClass('height');
          return options.scale = 'width';
        }
      } else {
        if (options.scale === 'width') {
          $holder.addClass('height');
          $holder.removeClass('width');
          return options.scale = 'height';
        }
      }
    };
    on_resize = function(e) {
      if (typeof window.resize_timeout === 'number') {
        window.clearTimeout(window.resize_timeout);
        delete window.resize_timeout;
      }
      return window.resize_timeout = window.setTimeout(resize_background, options.resize_delay);
    };
    load_images = function(image_list) {
      var $image, image, key, _len, _results;
      _results = [];
      for (key = 0, _len = image_list.length; key < _len; key++) {
        image = image_list[key];
        $image = $(templates.image(key, image.src));
        $holder.append($image);
        _results.push($('#' + key + ' img').load(function() {
          var $parent;
          $parent = $(this).parent();
          $parent.removeClass('loading');
          loaded_images.push($parent.attr('id'));
          if (loaded_images.length === 1) $parent.addClass('active');
          if (loaded_images.length === 2) {
            return window.transition_timeout = window.setTimeout(transition_background, options.transition_delay);
          }
        }));
      }
      return _results;
    };
    transition_background = function() {
      var $current_image, $next_image;
      $current_image = $('#' + loaded_images[current_image]);
      if ((current_image + 1) === loaded_images.length) {
        current_image = 0;
      } else {
        current_image += 1;
      }
      $next_image = $('#' + loaded_images[current_image]);
      /*
      		#	no fade in
      */
      /*
      		$current_image.removeClass('active')
      		$next_image.addClass('active')
      		
      		window.transition_timeout = window.setTimeout transition_background, options.transition_delay
      */
      /*
      		#	fade in
      */
      return $next_image.fadeIn(options.fade_duration, function() {
        var $previous_image;
        previous_image = current_image - 1;
        if (previous_image < 0) previous_image = loaded_images.length - 1;
        $current_image = $(this);
        $previous_image = $('#' + loaded_images[previous_image]);
        $previous_image.removeClass('active');
        $previous_image.hide();
        $current_image.addClass('active');
        return window.transition_timeout = window.setTimeout(transition_background, options.transition_delay);
      });
    };
    this.append(templates.holder(options.scale));
    $window = $(window);
    $holder = $('#large_background_transition_holder');
    resize_background();
    load_images(image_list);
    $window.bind('resize', on_resize);
    return true;
  };

}).call(this);

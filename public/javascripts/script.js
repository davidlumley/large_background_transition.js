(function() {

  $(function() {
    var image_list;
    image_list = [
      {
        'src': 'images/1.jpg'
      }, {
        'src': 'images/2.jpg'
      }, {
        'src': 'images/3.jpg'
      }, {
        'src': 'images/4.jpg'
      }
    ];
    return $('body').large_background_transition(image_list);
  });

}).call(this);

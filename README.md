#	large_background_transition.js

jQuery plugin that creates large background transitions.

##	Requirements

*	jQuery
*	some nice background images

##	Usage

Include jQuery and large_background_transition.js

	<script type="text/javascript" charset="utf-8" src="javascripts/library/jquery-1.7.1.js"></script>
	<script type="text/javascript" charset="utf-8" src="javascripts/plugins/large_background_transition.js"></script>

In jQuery's document ready handler define your list of images, and pass them to the `large_background_transition` function.

###	CoffeeScript

	$ ->
		image_list = [
			{
				'src':	'images/1.jpg'
			}
			{
				'src':	'images/2.jpg'
			}
			{
				'src':	'images/3.jpg'
			}
			{
				'src':	'images/4.jpg'
			}
			{
				'src':	'images/5.jpg'
			}
		]
		$('body').large_background_transition(image_list)

###	JavaScript

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
			}, {
				'src': 'images/5.jpg'
			}
		];
		return $('body').large_background_transition(image_list);
	})


The `large_background_transition` takes a hash of options. You can set the following parameters:

	resize_delay:		20
	transition_delay:	5000
	image_height:		1080
	image_width:		1920
	scale:				'height'

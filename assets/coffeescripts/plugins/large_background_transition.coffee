$.fn.large_background_transition = (image_list, options) ->
	
	defaults =
		resize_delay:	200
	
	options = $.extend defaults, options
	
	templates =
		holder:	->
			'<div id="large_background_transition_holder"></div>'
		
		image:	(id, src)	->
			'<div id="' + id + '"><img src="' + src + '"></div>'
		
		
	resize_background = ->
		$holder.height	window.innerHeight
		$holder.width	window.innerWidth
		console.log		'works'
	
	on_resize	=	(e)	->
		if typeof window.resize_timeout is 'number'
			window.clearTimeout window.resize_timeout
			delete window.resize_timeout
		
		window.resize_timeout = window.setTimeout resize_background, options.resize_delay
		
	this.append templates.holder()
	
	$window = $(window)
	$holder = $('#large_background_transition_holder')
	
	$window.bind	'resize', on_resize
	
	true

$.fn.large_background_transition = (image_list, options) ->
	
	defaults =
		resize_delay:		20
		transition_delay:	5000
		image_height:		1080
		image_width:		1920
		scale:	'height'
	
	options = $.extend defaults, options
	
	loaded_images = []
	
	templates =
		holder:	(scale)->
			'<div id="large_background_transition_holder" class="'+scale+'"></div>'
		
		image:	(id, src)	->
			'<div id="'+id+'" class="large_background_transition_image"><img src="'+src+'"></div>'
		
		
	resize_background = ->
		height_ratio = window.innerHeight / window.innerWidth
		
		if height_ratio < (options.image_height / options.image_width)
			if options.scale is 'height'
				$holder.addClass	'width'
				$holder.removeClass	'height'
				options.scale	=	'width'
		else
			if options.scale is 'width'
				$holder.addClass	'height'
				$holder.removeClass	'width'
				options.scale	=	'height'
	
		
	on_resize	=	(e)	->
		if typeof window.resize_timeout is 'number'
			window.clearTimeout window.resize_timeout
			delete window.resize_timeout
		
		window.resize_timeout = window.setTimeout resize_background, options.resize_delay
	
	
	load_images	=	(image_list)	->
		for image, key in image_list
			$image = $ templates.image(key, image.src)
			$holder.append $image
			$('#'+key+' img').load ->
				$parent = $(@).parent()
				$parent.removeClass 'loading'
				loaded_images.push $parent.attr('id')
				if loaded_images.length is 1
					$parent.addClass 'active'
				if loaded_images.length is 2
					window.transition_timeout = window.setTimeout transition_background, options.transition_delay
				
	
	
	transition_background	=	->
		#transition background
	
	
	this.append templates.holder options.scale
	
	$window = $(window)
	$holder = $('#large_background_transition_holder')
	
	resize_background()
	
	load_images image_list
	
	$window.bind	'resize', on_resize
	
	true

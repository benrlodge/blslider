
$.fn.blSlider = function() {

	$dest = $(this);

	var images = ( $dest.data('images')).split(',');		
	var htmlImages = '';
	for(i = 0; i < images.length; i++){
		var img = images[i].trim();
		htmlImages += "<li><img src='"+img+"'</li>";
	}
	$dest.html(htmlImages);



    return this;
}
 
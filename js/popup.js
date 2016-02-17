function lanzarPopup(id)
{	
	$('body').append('<div class="over-lay"></div>');
	$('body').css('overflow','hidden');
	$(id + ', .over-lay').fadeIn();
}

function cerrarPopup(id)
{
	$('body').css('overflow','auto');
	$(id + ', .over-lay').fadeOut(function(){
		$('.over-lay').remove();
	});
}
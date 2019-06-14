$(document).ready(function(){
	$(".modal-button").on('click', (e) => {
		$('.modal').css('display', 'block');
		$('body').addClass('shade');
	});

	$(document).click(function(event) {
	  if (!$(event.target).closest(".modal,.modal-button").length) {
	    $("body").find(".modal").css('display', 'none');
	    $('body').removeClass('shade');
	  }
	});
})


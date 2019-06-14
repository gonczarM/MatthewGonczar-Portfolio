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

	let maxHeight = 0;

	$("#projects").each(function(){
	   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

	$("projects").height(maxHeight);

})



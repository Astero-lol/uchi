(function( $ ){

	$.fn.validate = function(number) {

		var duration = 300,
			taskItem = $('.task__item');

		this.fadeOut(duration).next('.sprite__answer').text(number);
		taskItem.removeClass('error');

		return this;
	};
})( jQuery );
(function ($) {
	$(function() {

		var randomA = Math.floor(Math.random( ) * (1 - 10 + 1)) + 10,
			randomB = Math.floor(Math.random( ) * (1 - 10 + 1)) + 10
			a = randomA,
			b = randomB,
			duration = 350,
			sectionWidth = 39;

		// task
		var taskResult = $('.task__result'),
			taskField = $('.task__field'),
			taskWin = $('.task__win'),
			taskItemOne = $('.task__item_one'),
			taskItemTwo = $('.task__item_two');

		// sprite
		var arrowOne = $('.sprite__arrow_one'),
			arrowTwo = $('.sprite__arrow_two'),
			field = $('.sprite__field'),
			fieldTwo = $('.sprite__field_two');

		taskItemOne.text(a);
		taskItemTwo.text(b);

		var arrowPosition = function (el, number, offset) {
			el.css({'width': sectionWidth * number, 'left': sectionWidth * offset});
		};

		arrowPosition(arrowOne, a);

		field.on('input', function () {
			var self = $(this),
				value = parseFloat(self.val()),
				number = self.data('number');

			switch (number) {
				case 1:
					if(value == a) {
						self.validate(a);
						arrowPosition(arrowTwo, b, a);
						fieldTwo.focus();
					} else {
						self.addClass('error');
						taskItemOne.addClass('error');
					}
					break;

				case 2:
					if(value == b) {
						self.validate(b);
						taskResult.fadeOut(duration, function () {
							taskField.fadeIn(duration).focus();
						});
					} else {
						self.addClass('error');
						taskItemTwo.addClass('error');
					}
					break;
			}

		});

		taskField.on('input', function () {
			var self = $(this),
				value = parseFloat(self.val()),
				result = a + b;
			if(value == result) {
				self.removeClass('error').fadeOut(duration, function () {
					taskResult.text(result).fadeIn(duration);
					taskWin.fadeIn(duration);
				});
			} else {
				self.addClass('error');
			}
		});

	});
})(jQuery);
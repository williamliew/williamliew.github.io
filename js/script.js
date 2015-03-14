(function(win, $){
	'use strict';
	

	var lunchColors = ['D32E46', 'FA522B', 'FAC72B', 'FAEE2B'],
		numberOfIdeas = 0;

	var rand = lunchColors[Math.floor(Math.random() * lunchColors.length)];

	$('.create-event-form').on('submit', function() {
		var eventName = $('.event-name').val(),
			eventOrganiser = $('.event-planner').val();
		$('.create-event-form').fadeOut('slow');
		$('.room-wrapper').fadeIn('slow');
		$('.room-name').html(eventName + ' <small>organised by ' + eventOrganiser + '</small>');
		return false;
	});

	$('.idea-form').on('submit', function() {
		var ideaNameEl = $('.idea-name'),
			ideaName = ideaNameEl.val();

			$('.room').append('<div class="lunch-idea" data-votes="0" style="background-color: #' + lunchColors[Math.floor(Math.random() * lunchColors.length)] + '">' + ideaName + ' <br />+<span class="vote-count">0</span></div>');
			ideaNameEl.val('');

			numberOfIdeas++;
			//createFields();
			distributeIdeas();

		return false;
	});

	$('.room').on('click', '.lunch-idea', function(){
		var test = $(this),
			test1 = parseInt(test.attr('data-votes'));

			test1++;

			test.attr('data-votes', test1);
			test.children('.vote-count').text(test1);

		console.log(test1);


	});

	function distributeIdeas() {
	    var radius = 250;
	    var fields = $('.lunch-idea'), container = $('.room'),
	        width = container.width(), height = container.height(),
	        angle = 0, step = (2*Math.PI) / fields.length;
	    fields.each(function() {
	        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
	        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
	        if(window.console) {
	            console.log($(this).text(), x, y);
	        }
	        $(this).css({
	            left: x + 'px',
	            top: y + 'px'
	        });
	        angle += step;
	    });
	}


})(window, jQuery);

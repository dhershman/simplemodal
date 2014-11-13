(function($) {
	//Let's set some default options so we don't have to type them over and over and over
	var options = $.extend({
		height: "500",
		width: "500",
		title: "",
		description: "",
		top: "20%",
		left: "30%"
	});
	//this is our listener so we can listen for clicks on html with the attribute 'modal' on it. (in the p
	//tags of course)
	$.fn.convertHTML = function(el, options) {
	$('.modal').on('click', function(e) {
		var el = $(this).text().toLowerCase();
		console.log(el, options, 'inside jquery')
		$.fn.siteModal(el, options);
	});
}

	//We use $.fn so we can call this jQuery function else where like so: $("element").siteModal(el)
	//The switch allows you to add more cases to the modals library which is based off the text used in the html
	//the listener automatically converts new events to lowercase so you can just use lowercase in the switch
	$.fn.siteModal = function(options) {
		// elements = $(el).attr('class');
		options = $.extend({
					title: options.title,
					description: options.desc
				});
		return (
			add_block_page(),
			add_popup_box(),
			add_styles(),
			$('.modalBox').fadeIn());

	};


	//this sets up our opacity filled background(overlay) for the modal
	add_block_page = function() {
		var block_page = $('<div class="blockPage"></div>');

		$(block_page).appendTo('body');
	}

	//add some dynamic size css styles to our modal so we can use custom and adaptive heights and widths
	add_styles = function() {
		/*Block page overlay*/
		var pageHeight = $(document).height();
		var pageWidth = $(window).width();

		$('.blockPage').css({
			'height': pageHeight,
			'width': pageWidth
		});

		$('.modalBox').css({
			'left': options.left,
			'top': options.top,
			'height': options.height + 'px',
			'width': options.width + 'px'
		});

		$('.innerModal').css({
			'height': (options.height - 50) + 'px',
			'width': (options.width - 50) + 'px'
		});
	}

	//and finally we crreate our modal div here to be displayed onto our overlay over our webpage!
	add_popup_box = function() {
		var pop_up = $('<div class="modalBox"><a href="#" class="closeModal">X</a><div class="innerModal"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
		$(pop_up).appendTo('.blockPage');

		$('.closeModal, .blockPage').on('click', function(e) {
			$('.blockPage').fadeOut().remove();
			$(this).parent().fadeOut().remove();
		});
		$('.modalBox').on('click', function(e) {
			return false;
		});

	}
})(jQuery);

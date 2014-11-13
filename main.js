(function ($) {

    $.fn.siteModal = function (el) {
        elements = $(el).attr('class');
        //terms
        if (elements === 'termsLink') {
            options = $.extend({
                height: "500",
                width: "500",
                title: "Terms Modal!",
                description: "Our If Worked!",
                top: "20%",
                left: "30%"
            });
            //privacy
        } else if (elements === 'privacyLink') {
            options = $.extend({
                height: "500",
                width: "500",
                title: "Privacy Modal!",
                description: "Our If Worked!",
                top: "20%",
                left: "30%"
            });
        } else {

            // Default parameters

            options = $.extend({
                height: "500",
                width: "500",
                title: "default modal box",
                description: "This is a place holder Modal to put in our things into.",
                top: "20%",
                left: "30%"
            });

        }
        return (
        add_block_page(),
        add_popup_box(),
        add_styles(),

        $('.modalBox').fadeIn());

    };

    function add_block_page() {
        var block_page = $('<div class="blockPage"></div>');

        $(block_page).appendTo('body');
    }

    function add_styles() {
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

    function add_popup_box() {
        var pop_up = $('<div class="modalBox"><a href="#" class="closeModal">X</a><div class="innerModal"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
        $(pop_up).appendTo('.blockPage');

        $('.closeModal, .blockPage').on('click', function (e) {
        	$('.blockPage').fadeOut().remove();
            $(this).parent().fadeOut().remove();
        });
        $('.modalBox').on('click', function (e) {
        	return false;
        });

    }

})(jQuery);

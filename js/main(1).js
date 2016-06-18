/* Loading Script */
$(window).load(function(){
	$('#loader').fadeOut("slow");
});

/* Flickr Carousel */
$('#flickr_slider').jflickrfeed({
    limit: 14, // number of images to show
    qstrings: {
        id: '13547802@N05' // id of flickr gallery (use idgettr.com to get flickr gallery id)
    },
    itemTemplate: '<a href="{{image_b}}" target="_blank"><img src="{{image}}" class="img-responsive" alt="" /></a>'
}, function(data) {
    $('#dc_flickr_slider div').hide();

    var owl = $("#flickr_slider");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [480, 3],
            [600, 3],
            [700, 3],
            [768, 2],
            [1000, 3],
            [1140, 4],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false
    });

});

/* Responsive Menu */
( function( $ ) {
$( document ).ready(function() {
$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
     		return false;
	});

	$('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

	(function getColor() {
		var r, g, b;
		var textColor = $('#cssmenu').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			$('#cssmenu>ul>li>a').css('text-shadow', 'none');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			$('#cssmenu>ul>li>a').css('text-shadow', 'none');
			$('#cssmenu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
		}
	})();

	function rgbToHsl(r, g, b) {
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0;
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return l;
	}
});
} )( jQuery );

$(document).ready(function() {
    $("#tweetfeed").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        pagination: false,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade"
    });

    $('#tabs li a').click(function(e) {
        $('#tabs li, #content, .current').removeClass('current');
        $('#content p').removeClass('fadeInLeft animated');
        $(this).parent().addClass('current');
        var currentTab = $(this).attr('href');
        $(currentTab).addClass('current');
        $('#content p').addClass('fadeInLeft animated');
        e.preventDefault();
    });

    // Vertical Tab
    "use strict";
    $('#verticalTab2').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Prettyphoto
    "use strict";
    $("a[class^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default'
    });

    // Vertical Tab
    "use strict";
    $('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
    });

    // Vertical Tab
    "use strict";
    $('#verticalTab3').easyResponsiveTabs({
        type: 'horizontal',
        width: 'auto',
        fit: true
    });

    // Clients
    "use strict";
    var owl = $("#m-clients");
    owl.owlCarousel({
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 2],
            [1000, 3],
            [1200, 4],
            [1400, 4],
            [1600, 4]
        ],
        navigation: true,
        pagination: false
    });

    // Animated Skills
    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 42,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill1').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 68,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill2').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    $('.round-skills').appear(function() {
        options = {
            img1: 'images/c1.png',
            img2: 'images/c3.png',
            speed: 10,
            percent: 10,
            limit: 30,
            onInit: function() {
                console.log('init');
            },
            onProgress: function(p) { /*console.log('progress',p);*/ },
            onComplete: function(p) {
                console.log('complete', p);
            }
        };
        myplugin = $('#skill3').cprogress(options);
    }, {
        accX: 0,
        accY: -200
    });

    // Testimonials
    "use strict";
    $("#testimonials").owlCarousel({
        navigation: true, // Show next and prev buttons
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Animated Flat Skills
    "use strict";
    $('.flat-skills').appear(function() {
        $("#f-skill1 span").attr('style', 'width:95%;');
        $("#f-skill2 span").attr('style', 'width:39%;');
        $("#f-skill3 span").attr('style', 'width:75%;');
        $("#f-skill4 span").attr('style', 'width:23%;');
        $("#f-skill5 span").attr('style', 'width:52%;');
    }, {
        accX: 0,
        accY: -200
    });

    $("html").niceScroll();

    $('#toggle-view li').click(function() {
        var text = $(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').addClass('minus-ico');
            $(this).children('span').removeClass('plus-ico');
        } else {
            text.slideUp('200');
            $(this).children('span').addClass('plus-ico');
            $(this).children('span').removeClass('minus-ico');
        }
    });

});

$(window).load(function() {
    $('#home-slider').flexslider({
        animation: "slide",
        slideshow: true,
        directionNav: false,
        slideshowSpeed: 3000,
        animationSpeed: 700,
        controlsContainer: ".slider",
        controlNav: true,
        manualControls: ".home-slider-nav li",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});

// Google Map
$(function() {
    var map = new GMaps({
        el: "#map",
        lat: 40.714353,
        lng: -74.005973,
        zoom: 16,
        zoomControl: false,
        scrollwheel: false,
        controls: false,
        zoomControlOpt: {
            position: "TOP_LEFT"
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        styles: [{
            "featureType": "road",
            "elementType": "labels",
            "styles": [{
                "visibility": "simplified"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "hue": "#a1cdfc"
            }, {
                "saturation": 30
            }, {
                "lightness": 49
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#f49935"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "hue": "#fad959"
            }]
        }]
    });

    map.addMarker({
        lat: 40.714353,
        lng: -74.005973,
        icon: "images/marker.png"
    });
});

/* Animation */
$('[data-animated]').each(function() {
    $(this).addClass('animated-out');
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    $('.animated-out[data-animated]').each(function() {
        var $this = $(this);
        if (scroll + height >= $this.offset().top) {
            var delay = parseInt($this.attr('data-animated'));
            if (isNaN(delay) || 0 === delay) {
                $this.removeClass('animated-out').addClass('animated-in');
            } else {
                setTimeout(function() {
                    $this.removeClass('animated-out').addClass('animated-in');
                }, delay);
            }
        }
    });
});
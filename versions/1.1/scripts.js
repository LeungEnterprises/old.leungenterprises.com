// WOW!
new WOW().init();

var origImg = $('#homeImg').attr('src');

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// make sidebar mode default
if (!$('.nav').hasClass('hidden')) {
	$('.nav').addClass('hidden');
	$('.sidebar-toggle').addClass('show');
	$('.navbar-header').css('float', 'none'); // brings the toggle button to the right
	$('.sidebar-menu > .mobile-shown').removeClass('mobile-shown');
}

function setLightDark(hour) {
	// between the hours of 6 AM and 6 PM
	if ((hour >= 6) && (hour <= 18)) {
		$('#lightState').html('Dark');
		$('.jumbotron:nth-child(even)').css('background',
			'linear-gradient(' +
				'rgba(0, 0, 0, 0.5),' +
				'rgba(0, 0, 0, 0.5)' +
			'),' +
			'url("//i.imgur.com/UIVAC4n.jpg?1") no-repeat');
		if (isMobile) {
			$('.jumbotron:nth-child(even)').css('background-attachment', 'initial');
		} else {
			$('.jumbotron:nth-child(even)').css('background-attachment', 'fixed');
		}
		$('#homeImg').attr('src', '//i.imgur.com/C3KwcPw.png');
		// turns off sidebar only if window is larger than 880px
		if ($(window).width() >= 880) {
			if ($('.nav').hasClass('hidden')) {
				$('.nav').removeClass('hidden');
				$('.sidebar-toggle').removeClass('show');
				$('.navbar-header').css('float', '');
				$('.sidebar-menu > div:first-child').addClass('mobile-shown');
			}
		}
	} else {
		// turns on sidebar mode at night
		// comment this out to go back to normal navbar mode
		$('#lightState').html('Light');
		if (!$('.nav').hasClass('hidden')) {
			$('.nav').addClass('hidden');
			$('.sidebar-toggle').addClass('show');
			$('.navbar-header').css('float', 'none'); // brings the toggle button to the right
			$('.sidebar-menu > .mobile-shown').removeClass('mobile-shown');
		}
		// change bg back
		$('.jumbotron:nth-child(even)').css('background', '');
		if (isMobile) {
			$('.jumbotron:nth-child(even)').css('background-attachment', 'initial');
		}
		$('#homeImg').attr('src', origImg);
	}
}

// daytime bg is comcast center
// nightime is the original image
// turning it off because nighttime looks better
/*
var d = new Date();
setLightDark(d.getHours());
*/
// turn on night mode automatically
setLightDark(0);

// toggle mode
$('#lightDark').click(function() {
	// lightState gives the mode the user will try
	var status = $('#lightState').html();
	if (status === 'Dark') {
		// midnight
		setLightDark(0);
	} else {
		// noon
		setLightDark(12);
	}
	closeSidebar();
});

// shrinking nav
$(document).scroll(function() {
	if (!isMobile) {
		if ($(document).scrollTop() > 10) {
			if (!$('nav').hasClass('scrolled')) {
				$('nav').addClass('scrolled');
			}
		} else {
			if ($('nav').hasClass('scrolled')) {
				$('nav').removeClass('scrolled');
			}
		}
	} else {
		if ($(document).scrollTop() > 10) {
			if (!$('nav').hasClass('mobile-scrolled')) {
				$('nav').addClass('mobile-scrolled');
			}
		} else {
			if ($('nav').hasClass('mobile-scrolled')) {
				$('nav').removeClass('mobile-scrolled');
			}
		}
	}
});

// smooth scroll
// Thanks CSS-Tricks!
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// sidebar
var sidebar = $('.sidebar-menu');
var overlay = $('#sidebar-overlay');

var closeSidebar = function() {
	if (sidebar.hasClass('open')) {
		overlay.removeClass('show');
		sidebar.removeClass('open');
	}
}

$('.sidebar-toggle').click(
	function() {
		if (!sidebar.hasClass('open')) {
			overlay.addClass('show');
			sidebar.addClass('open');
		}
	}
);

$('#sidebar-overlay').click(
	closeSidebar
);
$('#sidebar-close').click(
	closeSidebar
);

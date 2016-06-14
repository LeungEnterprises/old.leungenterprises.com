$(document).ready(function() {
  // smooth scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 48 // 48 is jumbotron padding
          }, 1000);
          return false;
        }
      }
    });
  });
  // change header on scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      if (!$('header').hasClass('open')) {
        $('header').addClass('open');
      }
    } else {
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      }
    }
  });
});

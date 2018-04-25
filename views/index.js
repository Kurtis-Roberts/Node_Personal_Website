
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('.myPortrait portrait').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft');
        }
      });
    });
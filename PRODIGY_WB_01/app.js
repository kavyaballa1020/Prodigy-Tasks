$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 50) {
      $('#mainNav').addClass('scrolled');
    } else {
      $('#mainNav').removeClass('scrolled');
    }
  });
  
  $('.nav-link').hover(
    function() {
      $(this).css('color', '#ffc107');
    },
    function() {
      $(this).css('color', '#fff');
    }
  );
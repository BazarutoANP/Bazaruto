$(document).ready(function(){

  
    $('.container_cc_slider').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
          }
        },
       
      ]
    });

    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

});


document.addEventListener('DOMContentLoaded', function() {
  var fadeInElements = document.querySelectorAll('.fade-in');

  function checkViewport() {
    for (var i = 0; i < fadeInElements.length; i++) {
      var element = fadeInElements[i];
      var position = element.getBoundingClientRect();

      // If the top of the element is within the viewport
      if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    }
  }

  // Initial check when the page loads
  checkViewport();

  // Check when scrolling
  window.addEventListener('scroll', checkViewport);
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  var navbar = document.getElementById("navbar_id");
  var sticky = document.getElementById("nav_wrapper");
  var menu = document.getElementById("menu_icon");

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    
    navbar.classList.add("navbar_scroll");
    sticky.classList.add("navbar-fixed");
    menu.classList.add("scroll_menu_icon");
  } 
  else {
    navbar.classList.remove("navbar_scroll");
    sticky.classList.remove("navbar-fixed");
    menu.classList.remove("scroll_menu_icon");
  }
}

function topFunction() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
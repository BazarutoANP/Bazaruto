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
            dots: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        },
       
      ]
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
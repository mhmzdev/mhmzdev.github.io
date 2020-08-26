
$(document).ready(function () {
  // For Scroll to Top Animation
  $("#up").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 700);
  });

  // For Fade in animation
  AOS.init({
    easing: "ease",
    duration: 1200,
    once: true
  });
});

// For Text area to expand with words in New Story
$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// For Nav Links to stay active (Not Working)
$('.navbar-nav .nav-link').click(function () {
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
})

// To start animation when the area appeared in windows
$(window).scroll(statsIncrement);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Function to aniamte the counters
function statsIncrement() {
  if (isScrolledIntoView($(".statsContainer")) && !viewed) {
    viewed = true;
    $('.value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}

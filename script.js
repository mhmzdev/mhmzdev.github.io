// Show navbar at specific scroll height
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 900) {
    $('.navbar').css('background-color', 'transparent');
  } else {
    $('.navbar').css('background-color', 'rgb(42, 102, 78)');
  }
});

function fb() {
  window.open("https://www.facebook.com/mhamzadev", "_blank");
}
function twitter() {
  window.open("https://twitter.com/mhamzadev", "_blank");
}
function insta() {
  window.open("https://instagram.com/mhamzadev", "_blank");
}
function github() {
  window.open("https://github.com/m-hamzashakeel", "_blank");
}
function medium() {
  window.open("https://medium.com/@mhamzadev", "_blank");
}
function linkedIn() {
  window.open("https://www.linkedin.com/in/mhamzadev/", "_blank");
}
function holyQuranPlayStore() {
  window.open("https://play.google.com/store/apps/details?id=com.hmz.al_quran&pli=1", "_blank")
}

// Animate the progress bar
$(document).ready(function () {
  $('.progress .progress-bar').css("width",
    function () {
      return $(this).attr("aria-valuenow") + "%";
    }
  )
});


$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 1000, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});


// To change the link active while scrolling in navbar
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#navbarMenu a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#navbarMenu ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
}

$(function () {
  $('#homeLink').click(function () {
    var offsetTop = $('#home').offset().top;
    if (offsetTop) {
      $('html,body').animate({
        scrollTop: offsetTop
      }, 1000);
      return false;
    }
  });
});

$(document).ready(function () {
  // For Scroll to Top Animation
  $("#up").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1500);
  });

  // For Fade in animation
  AOS.init({
    easing: "ease",
    duration: 1200,
    once: true
  });
});

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

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
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}

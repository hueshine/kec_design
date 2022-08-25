



const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) {
    
const navBox = document.querySelector('.nav-window')
let closeBtn = document.querySelector(".close-btn");
menuBtn.addEventListener('click',(e) => {
    e.preventDefault();
    menuBtn.classList.toggle('open')
    console.log("clicked")
    navBox.classList.toggle("open")
})

if(closeBtn) {
    closeBtn.addEventListener('click',(e) => {
        e.preventDefault();
        navBox.classList.remove("open")
    })
}
}

// on window scroll
window.addEventListener('scroll', (e) => {

    // get sections on the page
    const fixed = document.querySelector('.fixed-nav');
    const about = document.querySelector('.about');
  
    // get px distance from top
    const topDistance = about.getBoundingClientRect().top;
  
    // console.log(topDistance);

    // if the distance to the top is ess than 200px
    if (topDistance < 400 ) {
      fixed.classList.add('active');

    // otherwise, remove the class
    } 
    else {
      fixed.classList.remove('active');
    }
});


// on window scroll
window.addEventListener('scroll', (e) => {

    // get sections on the page
    const banner = document.querySelector('.banner');
    const header = document.querySelector('.header');
    const about = document.querySelector('.about');
  
    // get px distance from top
    const topDistance = about.getBoundingClientRect().top;
  
    console.log(topDistance);

    // if the distance to the top is ess than 200px
    if (topDistance < 400 ) {
      banner.classList.add('active');
      header.classList.add('close');

    // otherwise, remove the class
    } 
    else {
      banner.classList.remove('active');
      header.classList.remove('close');
    }
});




$('.video-stories').owlCarousel({
    nav:true,
    dots: false,
    // navText: ["<i class='fa-solid fa-chevron-left' id='left'></i>", "<i class='fa-solid fa-chevron-right' id='right'></i>" ],
    center:true,
    margin: 24,
    items: 4
    // responsive: {
    //     0: {
    //         items: 1,
    //         autoplay: false,
    //         autoplayTimeout: 4000,
    //         autoplaySpeed: 3000,
    //     },
    //     560: {
    //         items: 2,
    //         autoplay: false,
    //         autoplayTimeout: 5000,
    //         autoplaySpeed: 3000,
    //     },
    //     900: {
    //         items: 3
    //     },
    //     1200: {
    //         items: 4
    //     }
    // }
})


$('.stories').owlCarousel({
  loop: true,
  autoplay: true,
  autoplaySpeed: 3200,
  autoplayTimeout: 3200,
  autoplayHoverPause: true,
  dots: false,
  margin: 0,
  items: 4,
})


$('.messages').owlCarousel({
    nav:true,
    dots: false,
    margin: 10,
    items: 1,
    // navText: ["<img src='../images/message-person.jpg'>","<img src='../images/message-person.jpg'>"]
})








// odometer
function custom_count(){
  var flag = true;
  $('.number-counter-section').each(function() {
      if ($(this).isInViewport()) {   // Here we check perticular section is in the viewport or number-counter-section
          if (flag) {
              /* FOR number counter(odometer)  */
              var arr = [],
              i = 0;
              $('.odometer').each(function() {
                  var odo = $(".odometer");
                  odo.each(function() {
                      var countNumber = $(this).attr("data-count");
                      $(this).html(countNumber);
                  });
                 
              });
              flag = false;
          }
      } else {}
  });
}


// for check the section in view port or not;
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
  console.log(elementBottom > viewportTop && elementTop < viewportBottom);
};

$(document).ready(function() {

  //  odometer section is on view-port or not
  custom_count();
  //resize-function
  $(window).resize(function() {
      custom_count();
  });
  
  $(window).on("scroll",function(){
    custom_count();
  });
});
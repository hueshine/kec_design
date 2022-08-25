
gsap.registerPlugin(ScrollTrigger);



gsap.from('.mission p', {
    scrollTrigger: {
        trigger: '.mission',
        start: 'top center+=60%',
        end: "bottom bottom",
        toggleActions: "restart none none reset",
    },
    duration: 0.8,
    opacity: 0,
    y: 80
})

ScrollTrigger.create({ 
  trigger: '.gallery .whole-wrapper', 
  start: 'top top+=20%', 
  pin: '.gallery .whole-wrapper .events-list',  
  end: 'bottom bottom', 
})

// ScrollTrigger.create({ 
//   trigger: '.fixed-nav', 
//   start: 'top top+=20%', 
//   pin: '.fixed-nav',  
//   end: 'bottom bottom', 
//   markers: true
// })


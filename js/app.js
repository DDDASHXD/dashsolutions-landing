gsap.registerPlugin(ScrollTrigger);

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 300) {
    document.getElementById("backToTop").classList.add('scroll');
  } else {
    document.getElementById("backToTop").classList.remove('scroll');
  } 
  
  if (currentScrollPos > 100) {
    document.getElementById('navbar').classList.add('scrolled');
    console.log('hello world')
  } else if (currentScrollPos < 100) {
    document.getElementById('navbar').classList.remove('scrolled')
  }
  prevScrollpos = currentScrollPos;
}

function loadAnimation() {
  gsap.to('.loadanimation', {
    duration: 1,
    opacity: 0,
    delay: 2,
  })
  gsap.from('#loadlogo', {
    duration: 1,
    opacity: 0,
    delay: 0.5,
  })
  gsap.from(".herostagger", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2, 
    delay: 3
  });
  gsap.from("#navbar", {
    duration: 1,
    opacity: 0
  })
}

loadAnimation();

gsap.from(".card", {
  scrollTrigger: {
    trigger: '#cards',
    toggleActions: 'restart none none reset'
  },
  duration: 1,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
})

gsap.from(".icon", {
  scrollTrigger: {
    trigger: '#cards',
    toggleActions: 'restart none none reset'
  },
  duration: 0.5,
  opacity: 0,
  y: 20,
  delay: 0.8,
  stagger: 0.2,
})

gsap.from(".servicesheading", {
  scrollTrigger: {
    trigger:'.servicesheading',
    toggleActions:'restart none none reset'
  },
  duration: 1,
  opacity: 0,
  x: -100,
  stagger: 0.1
})

setTimeout(function(){ document.getElementById('loadbg').style.display = 'none' }, 3000);
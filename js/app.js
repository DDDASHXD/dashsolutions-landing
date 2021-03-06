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
  gsap.to('#loadlogo', {
    duration: 1,
    opacity: 0,
    delay: 2,
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
  stagger: 0.1,
  delay: 1
})

setTimeout(function(){ document.getElementById('loadbg').style.pointerEvents = 'none' }, 3000);

//var loader = document.getElementById('loader')

gsap.set('#loader', {
  scaleX: 0,
  rotation: 10,
  xPercent: -5,
  yPercent: -50,
  transformOrigin: 'left center',
  autoAlpha: 1
});

barba.init({
  transitions: [{
      async leave() {
          await loaderIn();
      },
      enter() {
          loaderAway();
      }
  }]
});

function loaderIn() {
  // GSAP tween to stretch the loading screen across the whole screen
  return gsap.fromTo('#loader',
      {
          rotation: 10,
          scaleX: 0,
          xPercent: -5
      },
      {
          duration: 0.8,
          xPercent: 0,
          scaleX: 1,
          rotation: 0,
          ease: 'power4.inOut',
          transformOrigin: 'left center'
      });
}

function loaderAway() {
  // GSAP tween to hide loading screen
  return gsap.to('#loader', {
      duration: 0.8,
      scaleX: 0,
      xPercent: 5,
      rotation: -10,
      transformOrigin: 'right center',
      ease: 'power4.inOut'
  });
}

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});
"use strict";

function initPartnersSlider() {
  if ($(".partners_slider").length) {
    var partnersSlider = $(".partners_slider");
    partnersSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      autoplaySpeed: 1000,

      smartSpeed: 100,

      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        720: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1199: {
          items: 6,
        },
      },
    });
  }
}
initPartnersSlider();

// reverse slider
function initReversePartnersSlider() {
  if ($(".partners_slider_reverse").length) {
    var reverseSlider = $(".partners_slider_reverse");
    reverseSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      autoplaySpeed: 1000,
      rtl: true, // ✅ This enables reverse direction
      smartSpeed: 100,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        720: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1199: {
          items: 6,
        },
      },
    });
  }
}
initReversePartnersSlider();





// place student slider

function initPlaceSTDSlider() {
  if ($(".cards_conatainer").length) {
    var partnersSlider = $(".cards_conatainer");
    partnersSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: false,
      autoplaySpeed: 1000,
      smartSpeed: 100,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        720: {
          items: 3,
        },
        991: {
          items: 4,
        },
        1199: {
          items: 6,
        },
      },
    });
  }
}
initPlaceSTDSlider();
/*****************************************************************************
 ****************************** GSAP **************************************
 ****************************************************************************/

// announcement baar
gsap.from(".top_bar_contact_list", {
  duration: 2,
  ease: "elastic.out(1,0.3)",
  opacity: 0,
  scaleX: 0,
});
gsap.from(".home_slider_title", {
  y: -100,
  opacity: 0,
  duration: 0.5,
});
gsap.from(".home_slider_subtitle", {
  scaleX: 2,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
});
gsap.from(".home_slider_form_container", {
  y: 100,
  opacity: 0,
  delay: 1,
  duration: 0.5,
});

// features
gsap.registerPlugin(ScrollTrigger);
gsap.from(".features .section_title", {
  duration: 1,
  scaleX: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".features .section_title",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});
gsap.from(".features .section_subtitle", {
  duration: 1,
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".features .section_subtitle",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});
gsap.from(".features .features_row .feature_col", {
  duration: 1.2,
  delay: 0.5,
  scale: 0,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: ".features .section_subtitle",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// courses
gsap.from(".courses .section_title", {
  duration: 1,
  scale: 0,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  position: "relative",
  scrollTrigger: {
    trigger: ".courses .section_title",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});
gsap.from(".courses .section_subtitle", {
  duration: 1,
  scaleX: 2,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  position: "relative",
  scrollTrigger: {
    trigger: ".courses .section_subtitle",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// courses_row
gsap.from(".courses_row .courses_col_1", {
  duration: 1,
  x: -600,
  delay: 0.5,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: ".courses_row .courses_col_1",
    scroller: "body",
    start: "top 120%",
    toggleActions: "play none none none",
  },
});
gsap.from(".courses_row .courses_col_2", {
  duration: 1.5,
  scale: 0,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: ".courses_row .courses_col_2",
    scroller: "body",
    start: "top 120%",
    toggleActions: "play none none none",
  },
});
gsap.from(".courses_row .courses_col_3", {
  duration: 1,
  x: 600,
  opacity: 0,
  delay: 0.5,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: ".courses_row .courses_col_3",
    scroller: "body",
    start: "top 120%",
    toggleActions: "play none none none",
  },
});
gsap.from(".courses .courses_button_gsap", {
  duration: 1,
  scaleX: 0,
  opacity: 0,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger: {
    trigger: ".courses .courses_button_gsap",
    scroller: "body",
    start: "bottom 80%",
    toggleActions: "play none none none",
  },
});
gsap.from(".counter .milestone", {
  duration: 1,
  scaleX: 0,
  ease: "expoScale(0.5,7,none)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".counter .milestone",
    scroller: "body",
    start: "bottom 80%",
    toggleActions: "play none none none",
  },
});

// team
gsap.to(".team .bg-cover_team", {
  duration: 1,
  delay: 0.5,
  background: "transparent",
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".team .bg-cover_team",
    scroller: "body",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});
gsap.from(".team .section_title", {
  duration: 1,
  delay: 1,
  opacity: 0,
  scaleY: 0,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".team .section_title",
    scroller: "body",
    start: "top 90%",

    toggleActions: "play none none none",
  },
});
gsap.from(".team .section_subtitle", {
  duration: 1,
  delay: 1,
  opacity: 0,
  scaleX: 2,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".team .section_subtitle",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});
gsap.from(".team .team_col", {
  duration: 2,
  opacity: 0,
  y: 200,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".team .team_col",
    scroller: "body",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

// news
gsap.from(".news .news_col_left", {
  duration: 1,
  delay: 1,
  opacity: 0,
  y: -200,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".news .news_col_left",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});
gsap.from(".news .news_col_right", {
  duration: 1,
  delay: 0.8,
  opacity: 0,
  y: 200,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".news .news_col_right",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// partners
gsap.from(".partners", {
  duration: 1.4,
  opacity: 0,
  scaleX: 5,
  ease: "slow(0.7,0.7,false)",
  scrollTrigger: {
    trigger: ".partners",
    scroller: "body",
    start: "top 100%",
    toggleActions: "play none none none",
  },
});

// links
var tl = gsap.timeline();
tl.from(".logo_container", {
  x: -60,
  duration: 0.8,
  opacity: 0,
  scale: 0,
  stagger: 0.2,
});
tl.from(".nav_btns .icons", {
  x: 60,
  duration: 0.5,
  opacity: 0,
  scaleX: 0,
  stagger: 0.2,
});
tl.from(".main_nav li", {
  y: 60,
  duration: 0.3,
  opacity: 0,
  scaleX: 0,
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo, .center, .navright", {
  y: -15,
  opacity: 0,
  duration: 0.4,
  delay: 0.5,
});

gsap.from(".info-box1,.info-box2,.info-box3,.info-box4", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".info",
    scroller: "body",
  },
});

gsap.to(".rotatinglogo", {
  rotate: 360,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

gsap.to(".hireimg", {
  // scale: 0.9,
  y: -20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".e-right", {
  duration: 1,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".seo-left", {
  duration: 1,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".topcloud", {
  duration: 2,
  // opacity: 0,
  x: 170,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".bottomcloud", {
  duration: 2,
  x: -170,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".rocketdiv", {
  duration: 2,
  y: -110,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".formrocket", {
  // scale: 0.9,
  x: -20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".foot-left", {
  // y: -20,
  x: -20,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.from(".seo-box", {
  x: -150,
  opacity: 0,
  duration: 1,
});

gsap.from(".email-mark-box", {
  x: -150,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from(".web-analytics-box", {
  x: 150,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from(".expert-box", {
  x: 150,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

function menu() {
  document.querySelector(".menubtn").addEventListener("click", function () {
    gsap.to(".menubox", {
      left: "0%",
    });
  });

  document.querySelector(".closebtn").addEventListener("click", function () {
    gsap.to(".menubox", {
      left: "100%",
    });
  });
}
menu();

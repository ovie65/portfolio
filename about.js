document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(TextPlugin);

  const tl = gsap.timeline();

  tl.to(".ki", {
    duration: 2,
    text: "ABOUT ME",
    ease: "none"
  })

  .to(".ki", {
    duration: 1.5,
    text: "",
    ease: "none"
  })

  .to(".ki", {
    duration: 2.5,
    text: "Welcome ",
    ease: "none"
  })

  .to(".ki", {
    duration: 1.5,
    text: "",
    ease: "none"
  })

  .to(".ki", {
    duration: 2,
    text: "ABOUT ME",
    ease: "none"
  });

});





document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".form-container", {
    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".form-container",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

});




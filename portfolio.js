window.addEventListener("load", () => {

  const tl = gsap.timeline();

  // Fade in logo
  tl.from(".intro-logo", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  })

  // Fade in welcome text
  .from(".intro-text", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")

  // Pause 1s on screen
  .to({}, {duration: 1})

  // Fade out the preloader
  .to(".preloader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
      document.body.style.overflow = "auto"; // Enable scroll
    }
  })

  // Fade in entire main content
  .to(".main-content", {
    opacity: 1,
    duration: 0,
    pointerEvents: "auto", // Enable interactions
    onComplete: startMainAnimations // Trigger all landing animations
  });

});










function startMainAnimations() {
  
  // Kini animation
  gsap.to(".kini", {
    opacity: 1,
    x:0,
    duration: 4,
    ease: "power2.out"
  });

  // Hero text typing
 gsap.registerPlugin(TextPlugin);

gsap.fromTo(
  ".hero-title",
  { text: "" },
  {
    text: "Fast · Responsive · Animated",
    duration: 4,
    ease: "none"
  }
);

  


  


}






document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#jill", {
    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#jill",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    }
  });

});
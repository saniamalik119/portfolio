 gsap.registerPlugin(ScrollTrigger);

const fadeIns = gsap.utils.toArray('.panel');

fadeIns.forEach(fadeIn => {
    gsap.to(fadeIn, {
      scale: 1,
      start: "top 120%",
      duration: 1,
      scrollTrigger: {
        trigger: fadeIn,
        scrub: true,
        toggleActions: 'play none none reset'
      }
    });
  });

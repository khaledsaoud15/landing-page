const lenis = new Lenis({
  duration: 1.2, // Adjust scrolling speed
  smooth: true, // Enable smooth scrolling
  direction: "vertical", // Scroll direction
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

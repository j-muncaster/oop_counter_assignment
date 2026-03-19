import { Counter, StepCounter } from './counter.js';

const counter1 = new Counter("#counter-container1");
const counter2 = new Counter("#counter-container2", 10);
const counter3 = new StepCounter("#counter-container3", 5, 5);
const counter4 = new StepCounter("#counter-container4", 20, 20);

gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "bounce.out"
});

const sections = ["#overview", "#how-to", "#parameters", "#live-demo"];

sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});
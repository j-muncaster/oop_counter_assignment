import { Counter, StepCounter } from './counter.js';

const counter1 = new Counter("#counter-container1");
const counter2 = new Counter("#counter-container2", 10);
const counter3 = new StepCounter("#counter-container3", 5, 5);
const counter4 = new StepCounter("#counter-container4", 20, 20);
export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.initialValue = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.incrementBtn = document.createElement("button");
        this.decrementBtn = document.createElement("button");
        this.resetBtn = document.createElement("button");

        this.incrementBtn.textContent = "Increment";
        this.decrementBtn.textContent = "Decrement";
        this.resetBtn.textContent = "Reset";

        container.appendChild(this.display);
        container.appendChild(this.incrementBtn);
        container.appendChild(this.decrementBtn);
        container.appendChild(this.resetBtn);

        this.incrementBtn.addEventListener("click", () => this.increment());
        this.decrementBtn.addEventListener("click", () => this.decrement());
        this.resetBtn.addEventListener("click", () => this.reset());

        this.update();
    }

    increment() {
        this.count++;
        this.update();
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
            this.update();
        }
    }

    reset() {
        this.count = this.initialValue;
        this.update();
    }

    update() {
        this.display.textContent = `Count: ${this.count}`;
    }
}

export class StepCounter extends Counter {
    constructor(selector, initialValue = 5, step = 5) {
        super(selector, initialValue);
        this.step = step;
    }

    increment() {
        this.count += this.step;
        this.update();
    }

    decrement() {
        this.count -= this.step;
        this.update();
    }

    reset() {
        this.count = this.initialValue;
        this.update();
    }
}
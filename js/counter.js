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

        this.buttonCon = document.createElement("div");
        this.buttonCon.classList.add("counter-buttons");

        this.incrementBtn = document.createElement("button");
        this.decrementBtn = document.createElement("button");
        this.resetBtn = document.createElement("button");

        this.incrementBtn.textContent = "Increment";
        this.decrementBtn.textContent = "Decrement";
        this.resetBtn.textContent = "Reset";


        this.buttonCon.appendChild(this.incrementBtn);
        this.buttonCon.appendChild(this.decrementBtn);
        this.buttonCon.appendChild(this.resetBtn);

        container.appendChild(this.display);
        container.appendChild(this.buttonCon);

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

        this.resetBtn.disabled = this.count === this.initialValue;
        this.decrementBtn.disabled = this.count <= this.initialValue;
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
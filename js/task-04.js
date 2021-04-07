const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },

};


const counterRef = document.querySelector('#value');
const incrBtnRef = document.querySelector('[data-action="decrement"]');
const decrBtnRef = document.querySelector('[data-action="increment"]');

incrBtnRef.addEventListener('click', function () {
    counter.decrement();
    counterRef.textContent = counter.value;
});

decrBtnRef.addEventListener('click', function () {
    counter.increment();
    counterRef.textContent = counter.value;
});
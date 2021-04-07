

const refs = {
    inputRef: document.querySelector('#name-input'),
    nameLabelRef: document.querySelector('#name-output'),
};

refs.inputRef.addEventListener('input', onInputChange);


function onInputChange(event) {
    event.currentTarget.value;
    refs.nameLabelRef.textContent = event.currentTarget.value;
};
// const inputRef = document.getElementById('#validation-input');

// inputRef.addEventListener('blur', () => {
//     if (inputRef.value.length < 6) {
//         inputRef.classList.add('invalid');
        
//     }
// });

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', () => {
    if (inputRef.value.length === Number(inputRef.dataset.length )) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid');
    }
});

inputRef.addEventListener('focus', event => {
    event.target.classList.remove('valid', 'invalid');
});

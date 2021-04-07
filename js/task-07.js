const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const textSizeChange = () => {
    textRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', textSizeChange);
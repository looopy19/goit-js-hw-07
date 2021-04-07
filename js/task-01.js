const listItemsRef = document.querySelectorAll('.item');
console.log(`В списке ${listItemsRef.length} категории.`);



const animalsListTitlesRef = document.querySelector('.animals');
const animalsItemsQuantityRef = document.querySelector('.animals-list');

const foodListTitlesRef = document.querySelector('.food');
const foodItemsQuantityRef = document.querySelector('.food-list');

const techListTitlesRef = document.querySelector('.tech');
const techItemsQuantityRef = document.querySelector('.tech-list');


console.log(`Категория: ${animalsListTitlesRef.textContent}`);
console.log(`Количество элементов: ${animalsItemsQuantityRef.children.length}`);

console.log(`Категория: ${foodListTitlesRef.textContent}`);
console.log(`Количество элементов: ${foodItemsQuantityRef.children.length}`);

console.log(`Категория: ${techListTitlesRef.textContent}`);
console.log(`Количество элементов: ${techItemsQuantityRef.children.length}`);
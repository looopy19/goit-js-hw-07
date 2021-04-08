const listItemsRef = document.querySelector('ul#categories');
const itemRef = listItemsRef.querySelectorAll('li.item');
console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach((item) => {
    const header = item.querySelector('h2').textContent;
    const itemsAmount = item.querySelectorAll('li').length;

    console.log(`Категория: ${header}`);
    console.log(`Количество элементов: ${itemsAmount}`);
 });




const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
    const ingredientsListItemRef = document.createElement('li');
    ingredientsListItemRef.textContent = ingredient;
    ingredientsListRef.append(ingredientsListItemRef);
    console.log(ingredient);
};


    

 


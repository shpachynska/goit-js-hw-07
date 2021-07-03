const listEl = document.querySelector("#ingredients");
console.log(listEl);

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createListItems = (ingredients) =>
  ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    return listItemEl;
  });

const ingredientList = createListItems(ingredients);

listEl.append(...ingredientList);

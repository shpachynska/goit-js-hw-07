const categoiesEl = document.querySelector("#categories");
const categoryItems = categoiesEl.querySelectorAll("li.item");
console.log(`В списке ${categoryItems.length} категории.`);

const categoryName = function () {
  categoryItems.forEach((item) => {
    const itemHead = item.querySelector("h2");
    const itemQuantity = item.querySelectorAll("li");
    console.log(`Категория: ${itemHead.textContent}`);
    console.log(`Количество элементов: ${itemQuantity.length}`);
  });
};

categoryName();

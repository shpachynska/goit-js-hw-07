const counterValue = document.querySelector("#value");
const decreaseBtn = document.querySelector('[data-action="decrement"]');
const increaseBtn = document.querySelector('[data-action="increment"]');

let targetValue = Number(counterValue.textContent);
console.log(targetValue);

decreaseBtn.addEventListener("click", onMinusClick);
function onMinusClick() {
  targetValue -= 1;
  counterValue.textContent = `${targetValue}`;
}

increaseBtn.addEventListener("click", onPlusClick);
function onPlusClick() {
  targetValue += 1;
  counterValue.textContent = `${targetValue}`;
}

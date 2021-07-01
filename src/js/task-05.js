const inputField = document.querySelector("#name-input");
inputField.addEventListener("input", onInputChange);

const guestName = document.querySelector("h1 > span");

const isEmpty = (str) => !str.trim().length;

function onInputChange(event) {
  isEmpty(this.value)
    ? (guestName.textContent = "незнакомец")
    : (guestName.textContent = event.currentTarget.value);
}

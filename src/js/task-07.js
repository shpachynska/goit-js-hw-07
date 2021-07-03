const targetText = document.querySelector("#text");
const inputField = document.querySelector("#font-size-control");

inputField.addEventListener("input", onInput);
function onInput(event) {
  targetText.style.fontSize = event.currentTarget.value + "px";
}

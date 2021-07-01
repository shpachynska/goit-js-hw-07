const inputField = document.querySelector("#validation-input");
const dataLength = Number(inputField.getAttribute("data-length"));

inputField.addEventListener("blur", onFocusBlur);

function onFocusBlur(event) {
  if (this.value.length !== dataLength) {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  } else {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
}

const textareaEl = document.getElementById("textarea");
const totalChar = document.getElementById("total");
const remainChar = document.getElementById("remain");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalChar.innerText = textareaEl.value.length;
  remainChar.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;;
}

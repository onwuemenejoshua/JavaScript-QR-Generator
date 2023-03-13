const generate = document.querySelector("#Generate");
const button = document.querySelector("#button");
const formData = document.querySelector("#form-data");

button.addEventListener("click", () => {
  let formValue = formData.value;
  console.log(formValue);
  generate.classList.add("active");
});

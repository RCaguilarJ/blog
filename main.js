const modal = document.querySelector(".modal");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const closeButton = document.querySelector(".modal_content_close");
button1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
button2.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
button3.addEventListener("click", () => {
  // 1ra Forma
  // modal.className = 'modal visible';
  //2da Forma
  // modal.style.display = 'grid';

  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
closeButton.addEventListener("click", () => {
  // modal.style.display = 'none';

  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

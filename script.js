let buttonOpen = document.querySelectorAll(".accordian__question");

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener("click", function () {
    buttonOpen[i].classList.toggle("open");
    buttonOpen[i].nextElementSibling.classList.toggle("open");
  });
}

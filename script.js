let accordianButton = document.querySelectorAll(".accordian__question");

// accordianButton.forEach((accordian) => {
//   accordian.addEventListener("click", (event) => {
//     accordian.classList.toggle("open");
//     accordian.nextElementSibling.classList.toggle("open");
//   });
// });

// My old way of adding eventListener to elements.

for (let i = 0; i < accordianButton.length; i++) {
  accordianButton[i].addEventListener("click", function () {
    accordianButton[i].classList.toggle("open");
    accordianButton[i].nextElementSibling.classList.toggle("open");
  });
}

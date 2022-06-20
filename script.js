let accordianButton = document.querySelectorAll(".accordian__question");

accordianButton.forEach((accordian) => {
  accordian.addEventListener("click", (event) => {
    accordian.classList.toggle("open");
    accordian.nextElementSibling.classList.toggle("open");
  });
});

// My old way of adding eventListener to elements.

// for (let i = 0; i < buttonOpen.length; i++) {
//   buttonOpen[i].addEventListener("click", function () {
//     buttonOpen[i].classList.toggle("open");
//     buttonOpen[i].nextElementSibling.classList.toggle("open");
//   });
// }

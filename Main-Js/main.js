// Show And Hidden Header
let buttonShow = document.querySelector("i.show-head");
let header = document.querySelector(".header");

buttonShow.addEventListener("click", () => {
  header.classList.toggle("show");

  if (header.classList.contains("show")) {
    buttonShow.classList = "fa-solid fa-x show-head";
  } else {
    buttonShow.classList = "uil uil-apps show-head";
  }
});

// Active Page
let mainLinks = document.querySelectorAll(".main-links a");
let sections = document.querySelectorAll(".main-title, section.home");

addEventListener("scroll", function () {
  sections.forEach(function (s) {
    if (scrollY >= s.offsetTop - 200) {
      mainLinks.forEach((e) => {
        e.classList.remove("active");
        if (`#${s.id}` == e.getAttribute("href")) e.classList.add("active");
      });
    }
  });
});

// Random Number Color
let featureNumber = document.querySelectorAll(".feature .container .number");

setInterval(() => {
  let colour = "#";
  let colourArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "b", "e", "f"];
  for (let i = 0; i < 6; i++) {
    colour += colourArr[Math.floor(Math.random() * colourArr.length)];
  }
  featureNumber.forEach((ele) => {
    ele.style.color = colour;
  });
}, 1500);

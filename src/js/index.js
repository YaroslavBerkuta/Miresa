const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const modelPreview = document.querySelectorAll(".model__img-slide img");
const modelImg = document.querySelector(".model__img-big img");
modelPreview.forEach((item) => {
  item.addEventListener("click", () => {
    modelImg.src = item.src;
  });
});

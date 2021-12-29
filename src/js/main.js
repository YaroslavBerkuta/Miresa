import * as flsFunctions from "./modules/function.js";
import "./index.js";
flsFunctions.isWebp();

import Swiper from "swiper";

const swiper = new Swiper(".slider", {
  wrapperClass: "slider__wrapper",
  slideClass: "slider__slide",
  slidesPerView: "auto",
  loop: true,
});

const modelSlider = new Swiper(".model__img-small", {
  wrapperClass: "model__img-wrapper",
  slideClass: "model__img-slide",
  direction:"vertical",
  slidesPerView: "auto",
});

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const track = document.querySelector(".track");

const slides = Array.from(track.children);
const nextButton = document.querySelector(".carouselButton_right");
const prevButton = document.querySelector(".carouselButton_left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);
console.log(dots);
console.log(track);

//arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left;
  +")";
  currentSlide.classList.remove("currentSlide");
  targetSlide.classList.add("currentSlide");
};
const moveDot = (container, currentDot, targetDot) => {
  currentDot.classList.remove("current-");
  targetDot.classList.add("current-");
};
//when i click right move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".currentSlide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  const currentDot = dotsNav.querySelector(".current-");
  const nextDot = currentDot.nextElementSibling;
  moveDot(dotsNav, currentDot, nextDot);
});

//when i click left move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".currentSlide");
  const previousSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, previousSlide);
  const currentDot = dotsNav.querySelector(".current-");
  const previousDot = currentDot.previousElementSibling;
  moveDot(dotsNav, currentDot, previousDot);
});

//when i click the nav indicators move to tha slide

var viewButton = document.getElementById("view2Ddodgeball");

viewButton.addEventListener("click", (e) => {
  const loadingSymbol = document.querySelector(".spinner-border");

  const yuh = (loadingSymbol.style.visibillity = "truth");
});

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let counter = 1;

nextBtn.addEventListener("click", () => {
  if (counter >= slides.length - 1) {
    nextBtn.style.display = "none";
    return;
  }
  prevBtn.style.display = "block";
  counter++;
  carousel.style.transform = `translateX(${-counter * 100}%)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    prevBtn.style.display = "none";
    return;
  }
  nextBtn.style.display = "block";
  counter--;
  carousel.style.transform = `translateX(${-counter * 100}%)`;
});

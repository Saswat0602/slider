const slides = document.querySelectorAll(".slide");
let c = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});



const prev = () => {
    c--;
    slideImage();
  
};

const next = () => {
    c++;
    slideImage();
  
};
const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${c * 100}%)`;
  });
};
setInterval(slideImage, 1000);

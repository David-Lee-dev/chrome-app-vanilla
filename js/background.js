const images =[
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
]

const chsoenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chsoenImage}`;
// document.body.appendChild(bgImage);

const src = `url("img/${chsoenImage}")`;

console.log(src);
const bgImage = document.getElementById("background");
bgImage.style.backgroundImage = src;
bgImage.style.backgroundRepeat = "no-repeat";
bgImage.style.backgroundSize = "100%";
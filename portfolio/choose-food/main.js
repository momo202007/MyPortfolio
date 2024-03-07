'use strict';

{
  const img =document.getElementById("main-img");
  
  img.addEventListener("click", () => {
    const resules = [
      "chuukadon.png",
      "sushi.png",
      "sandwich.png",
      "hamburger.png",
      "ramen.png",
      "spaghetti.png",
      "yakisoba.png",
      "udon.png",
      "soba.png",
    ];

    const n = Math.floor(Math.random() * resules.length);
    img.src = "img/" + resules[n];
  });
}
//Funksjonen er relatert til overlayet//

const overlayBtn = document.querySelector("#overlay-btn");
const overlay = document.querySelector(".overlay-content");

overlayBtn.onclick = showOverlay;
function showOverlay() {
  document.querySelector(".overlay-content").style.display = "block";
}
overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});

//Karusellen for tilbakemeldinger av kunder//
/* Denne delen var jeg litt usikker på, men har brukt forelesningsvideoer, samt stackoverflow til å få til tilbakemeldingskarusellen:
https://stackoverflow.com/questions/74844415/how-do-i-create-a-carousel-that-slides-on-next-and-previous-button-click-the-ca"*/

const CarouselItems = document.querySelectorAll(".carousel-item");
let i = 0;
CarouselItems[0].style.display = "block";

document
  .querySelector("#carousel-btn-arrowright")
  .addEventListener("click", function () {
    CarouselItems[i].style.display = "none";
    i = i + 1;
    if (i === CarouselItems.length) {
      i = 0;
    }
    CarouselItems[i].style.display = "block";
  });

document
  .querySelector("#carousel-btn-arrowleft")
  .addEventListener("click", function () {
    CarouselItems[i].style.display = "none";
    i = i - 1;
    if (i < 0) {
      i = CarouselItems.length - 1;
    }
    CarouselItems[i].style.display = "block";
  });

//Funksjon relatert til easteregg//

const eastereggBtn = document.querySelector(".easteregg-button");
const eastereggVideo = document.querySelector(".easteregg-video");
eastereggBtn.onclick = showVideoOfCofeeBrew;
function showVideoOfCofeeBrew() {
  document.querySelector(".easteregg-video").style.display = "block";
}

const iframebtn = document.querySelector(".iframe-btn");
iframebtn.onclick = closeEasterEgg;
function closeEasterEgg() {
  document.querySelector(".easteregg-video").style.display = "none";
}

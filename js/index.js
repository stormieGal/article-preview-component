const arrow = document.querySelector(".arrow");
const rowMobile = document.querySelector(".row-mobile");
let activeIsShown = false;
arrow.addEventListener("click", displaySocialMediaLinks);

const picture = document.querySelector(".row-mobile picture");
const row = document.querySelector(".row-mobile .row");
const arrowImg = document.querySelector(".row-mobile img.arrow");
const active = document.querySelector(".active");

function displaySocialMediaLinks() {
  // Modify the DOM
  rowMobile.style.margin = "0 0";

  picture.style.display = "none";

  row.style.display = "none";

  arrowImg.style.display = "none";

  active.style.display = "flex";
  active.style.width = "100%";
  activeIsShown = true;
}

const backToNormal = document.getElementById("backToNormal");
backToNormal.addEventListener("click", redisplayNormal);

function redisplayNormal() {
  rowMobile.style.margin = "auto 2em";

  picture.style.display = "block";

  row.style.display = "flex";

  arrowImg.style.display = "block";

  active.style.display = "none";
  active.style.width = "100%";
}

// TO DO: Improve the transistion from normal to .active with an animation.

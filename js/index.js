/**
 * @abstract - This file modifies index.html file
 * @author- stormieGal
 * @description - A frontend Mentor Challenge: Article preview component
 */
const arrow = document.querySelector(".arrow");
const rowMobile = document.querySelector(".row-mobile");
const picture = document.querySelector(".row-mobile picture");
const row = document.querySelector(".row-mobile .row");
const arrowImg = document.querySelector(".row-mobile img.arrow");
const active = document.querySelector(".active");

let isNotMobile;

function displaySocialMediaLinks() {
  // Modify the DOM
  active.style.display = "flex";
  if (!isNotMobile) {
    rowMobile.style.margin = "0 0";
    picture.style.display = "none";
    row.style.display = "none";
    arrowImg.style.display = "none";

    active.style.width = "100%";
  }
}

const backToNormal = document.getElementById("backToNormal");

function redisplayNormal() {
  active.style.display = "none";
  if (!isNotMobile) {
    rowMobile.style.margin = "auto 2em";

    picture.style.display = "block";

    row.style.display = "flex";

    arrowImg.style.display = "block";

    active.style.width = "100%";
  }
}
// TO DO: Improve the transistion from normal to .active with an animation.

// Create a condition that targets viewports at most 600px wide
const mediaQuery = window.matchMedia("(max-width: 600px)");
function handleMobileChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    isNotMobile = false;

    // console.log("Media Query Matched!");
  } else {
    // In case it's a tablet or a desktop
    isNotMobile = true;
  }
  arrow.addEventListener("click", displaySocialMediaLinks);
  backToNormal.addEventListener("click", redisplayNormal);
}

// Register event listener
mediaQuery.addListener(handleMobileChange);

// Initial check
handleMobileChange(mediaQuery);

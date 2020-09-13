const arrow = document.querySelector(".arrow");
const rowMobile = document.querySelector(".row-mobile");
arrow.addEventListener("click", displaySocialMediaLinks);
function displaySocialMediaLinks() {
  const picture = document.querySelector(".row-mobile picture");
  picture.style.display = "none";
  const row = document.querySelector(".row-mobile .row");
  row.style.display = "none";
  const svg = document.querySelector(".row-mobile svg");
  svg.style.display = "none";
  const active = document.querySelector(".active");
  active.style.display = "flex";
  // active.style.backgroundColor = "red";
  active.style.width = "100%";
}

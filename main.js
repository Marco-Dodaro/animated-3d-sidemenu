let check = document.querySelector(".checkbox");

function openNav() {
  document.querySelector(".slide").style.transform = "skewY(-15deg) translateX(0px)";
  check.setAttribute('onclick','closeNav()');
}

function closeNav() {
  document.querySelector(".slide").style.transform = "skewY(-15deg) translateX(-240px)";
  check.setAttribute('onclick','openNav()');
}

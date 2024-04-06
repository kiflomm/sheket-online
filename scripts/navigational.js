function more() {
  document.getElementById("more").style.display = "block";
  var i;
  for (i = 0; i < 3; i++) {
    document.getElementById("more").getElementsByTagName("li")[
      i
    ].style.display = "list-item";
  }
  document.getElementsByClassName("imagebox")[0].style.zIndex = -1;
}
function hide() {
  document.getElementById("more").style.display = "none";
  document.getElementsByClassName("imagebox")[0].style.zIndex = 1;
}
var click = 0;
function moreV() {
  if (click == 0) {
    document.getElementById("moreV").style.display = "block";
    document.getElementsByClassName("imagebox")[0].style.zIndex = -1;
    click = 1;
  } else if (click == 1) {
    document.getElementById("moreV").style.display = "none";
    document.getElementsByClassName("imagebox")[0].style.zIndex = 1;
    click = 0;
  }
} 
var hidden = 1;
var styles;
function vMenu() {
  if (hidden == 1) {
    document.getElementsByClassName("navvertical")[0].style.display = "block";
    hidden = 0;
    document
      .getElementsByClassName("menu")[0]
      .getElementsByTagName("button")[0].style.opacity = 0.7;
    document.getElementsByClassName("navvertical")[0].style.width = "100%";
    document
      .getElementsByClassName("menu")[0]
      .getElementsByTagName("button")[0]
      .getElementsByTagName("span")[0].innerHTML = "&#9932;";
  } else {
    document.getElementsByClassName("navvertical")[0].style.display = "none";
    hidden = 1;
    document
      .getElementsByClassName("menu")[0]
      .getElementsByTagName("button")[0].style.opacity = 1;
    document
      .getElementsByClassName("menu")[0]
      .getElementsByTagName("button")[0]
      .getElementsByTagName("span")[0].innerHTML = "&#9776;";
  }
}
function vertiHide() {
  document.getElementsByClassName("navvertical")[0].style.display = "none";
  document
    .getElementsByClassName("menu")[0]
    .getElementsByTagName("button")[0].style.opacity = 1;
  document
    .getElementsByClassName("menu")[0]
    .getElementsByTagName("button")[0]
    .getElementsByTagName("span")[0].innerHTML = "&#9776;";
  hidden = 1;
}

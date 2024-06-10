const inputFocus = document.getElementById("myInput");
const divEvent = document.getElementById("info");

function showDivIvent() {
  divEvent.hidden = false;
}
function hideDivIvent() {
  divEvent.hidden = true;
}

inputFocus.addEventListener("focus", showDivIvent);
inputFocus.addEventListener("blur", hideDivIvent);

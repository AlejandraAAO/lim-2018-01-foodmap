const body = document.querySelector("body");
body.addEventListener("load", timeout);

window.onload = timeout;
function timeout (){
  window.setTimeout("redirect()", 8000)
}

function redirect(){
  window.location.href = "../html/wall.html"
  return
}
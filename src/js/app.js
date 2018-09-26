const body = document.querySelector("body");
body.addEventListener("load", timeout);

window.onload = timeout;
function timeout (){
  window.setTimeout("redirect()", 2000)
}

function redirect(){
  window.location.href = "wall.html"
  return
}
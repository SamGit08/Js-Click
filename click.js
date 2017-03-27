var btn = document.getElementById("btn");

btn.onmousedown = mouseDown;

btn.onmouseup = mouseUp;


var pts = 0;

var hs = document.createElement("h1");
document.body.appendChild(hs);
//localStorage.setItem("high", pts);
hs.textContent = "High score: " + high;

var score = document.createElement("h2");
document.body.appendChild(score);
score.textContent = "Score: " + pts;

function mouseDown(){
  var nl = Math.floor(Math.random() * (90) + 1);
  var nt = Math.floor(Math.random() * (90) + 1);
  btn.style.top = nt + "%";
  btn.style.left = nl + "%";
  btn.classList.remove("bouton");

  pts = pts + 10;

  score.textContent = "Score: " + pts;


  localStorage.setItem("point", pts);
  if(localStorage.setItem("point", pts) == pts){

  var high = localStorage.getItem("point");
  hs.textContent = "High score: " + high;

  //alert (high);

// }
// if(pts == 50){
//   alert(pts);
// }
//
//
//   hs.textContent = "High score: " + localStorage.getItem("high");
//
// }
// else {
//
//     hs.textContent = "High score: " + pts;
//   }
}


function mouseUp(){
  btn.classList.add("bouton");
}


btn.addEventListener("animationend", perdu);

function perdu(){
  alert("BOOM ! Vous avez obtenu: " + pts +" points");

  pts = pts - pts;

}

// navbar code start 
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
document.onclick = function (e) {
  if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
    toggle.classList.remove('active');
    navbar.classList.remove('active');
  }
}
toggle.onclick = function () {
  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
}
// navbar code end 
function myFunction(a,b,c) {
  console.log(a,b,c);
  var dots = document.getElementById(a);
  var moreText = document.getElementById(b);
  var btnText = document.getElementById(c);
// console.log(arg);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
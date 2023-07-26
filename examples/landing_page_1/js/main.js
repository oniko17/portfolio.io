document.querySelector(".form__auth-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;

  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 2px solid red";
    document.getElementById("password2").style = "border: 2px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 2px solid red";
    document.getElementById("password2").style = "border: 2px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 2px solid green";
    document.getElementById("password2").style = "border: 2px solid green";
  }
  return true;
};

let menuBtn = document.querySelector(".menu-btn");
let menuEl = document.querySelector(".menu");
let body = document.body;
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuEl.classList.toggle("active");
  body.classList.toggle("hide__scroll");
});

document.querySelector(".price__card").scrollLeft =
  document.querySelector(".price__card").scrollWidth -
  document.querySelector(".card-white").offsetWidth * 2.5;



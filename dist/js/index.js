//GET FOOTER DATE
document.querySelector(".footer-year").innerHTML = new Date().getFullYear();

//SIDE NAV FUNCTIONS
function openNav() {
  document.getElementById("side-nav").classList.add("open");
}
function closeNav() {
  document.getElementById("side-nav").classList.remove("open");
}
var box = document.getElementById("side-nav");
document.addEventListener("click", function (event) {
  if (event.target.closest("#side-nav") || event.target.closest("#toggle-nav"))
    return;
  box.classList.remove("open");
});

//THEME TOGGLE
var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

function ToggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var toggleText = document.getElementById("toggle-text");

  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    toggleText.innerText = "Deactivate Dark Mode";
  } else {
    toggleText.innerText = "Activate Dark Mode";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}

const menuButton = document.querySelector(".menuButton");
const menuButtonOff = document.querySelector(".menuButtonOff");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.add("show");
});

menuButtonOff.addEventListener("click", () => {
  menu.classList.remove("show");
});

menu.addEventListener("click", (e) => {
  if (e.target.matches("._menu-ul a")) {
    e.preventDefault();
    const id = e.target.getAttribute("href").substring(1);

    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.classList.add("hidePage");
    });

    const targetPage = document.getElementById(id);
    targetPage.classList.remove("hidePage");
    menu.classList.remove("show");
  }

  if (e.target.matches(".menu-li")) {
    const target = e.target.querySelector("a").getAttribute("href");
    const element = document.querySelector(target);

    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.classList.add("hidePage");
    });

    element.classList.remove("hidePage");
    menu.classList.remove("show");
  }
});

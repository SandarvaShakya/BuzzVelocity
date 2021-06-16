function menu() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-bar--toggle");
  });
}

function scroll() {
  const arrow = document.querySelector(".arrow");
  const section = document.querySelector("#scroll-view");

  arrow.addEventListener("click", () => {
    section.scrollIntoView(true);
  });
}

menu();
scroll();

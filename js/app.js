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
    section.scrollIntoView(false);
  });
}

function activeLink() {
  const navLinks = document.querySelectorAll(".nav__links");

  navLinks.forEach(function (link) {
    link.addEventListener("click", (e) => {
      navLinks.forEach((links) => {
        if (links.classList.contains("active")) {
          links.classList.remove("active");
        }
      });
      e.target.classList.add("active");
    });
  });
}

menu();
scroll();
activeLink();

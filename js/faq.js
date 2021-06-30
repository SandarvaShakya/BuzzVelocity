const answer = document.querySelectorAll(".answer");
const toggleButton = document.querySelectorAll(".question__icon");

toggleButton.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle(
      "answer--toggle"
    );
    e.currentTarget.parentElement.classList.toggle("question--toggle");
    e.currentTarget.parentElement.children[1].classList.toggle(
      "question__icon--toggle"
    );
  });
});

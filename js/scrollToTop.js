const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = () => scrollFunction();
backToTopBtn.onclick = () => scrollToTop();

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // MENU TOGGLE FUNCTIONALITY
  const menu = document.querySelector('.menu');
  const toggleButton = document.querySelector('.menu-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }

  // HEADING TEXT RESPONSIVE FUNCTION
  function updateHeadingText() {
    const title = document.getElementById("mainLogo");
    if (!title) return;

    if (window.innerWidth <= 768) {
      title.innerHTML = "WebSite<br>Application";
    } else {
      title.innerHTML = "WebSite & Application<br>Lars Schou Gregersen";
    }
  }

  // INITIAL CHECK
  updateHeadingText();

  // ON RESIZE
  window.addEventListener("resize", updateHeadingText);
});

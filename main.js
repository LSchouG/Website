function updateHeadingText() {
  const title = document.getElementById("mainLogo");
  if (!title) return; // SAFETY CHECK in case the element doesn't exist

  if (window.innerWidth <= 768) {
    title.innerHTML = "WebSite<br>Application";
  } else {
    title.innerHTML = "WebSite & Application<br>Lars Schou Gregersen";
  }
}

// Run when the page loads
window.addEventListener("DOMContentLoaded", updateHeadingText);

// Run whenever the window is resized
window.addEventListener("resize", updateHeadingText);
document.addEventListener('DOMContentLoaded', function () {
  // MENU TOGGLE FUNCTIONALITY
  const menu = document.querySelector('.menu');
  const toggleButton = document.querySelector('.menu-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  }

  // CHANGING TEXT ON RESPONSIVE FUNCTION
  function updateText() {
    const logoTekst = document.getElementById("logoTekst");
    const mainHeading = document.getElementById("mainHeading");
    const iconText1 = document.querySelector("#iconText1");
    const iconText2 = document.querySelector("#iconText2");
    const iconText3 = document.querySelector("#iconText3");
    const iconText4 = document.querySelector("#iconText4");
    const iconText5 = document.querySelector("#iconText5");
    const iconText6 = document.querySelector("#iconText6");

    if (!logoTekst) return;
    if (!mainHeading) return;
    if (!iconText1) return;
    if (!iconText2) return;
    if (!iconText3) return;
    if (!iconText4) return;
    if (!iconText5) return;
    if (!iconText6) return;



    if (window.innerWidth <= 768) {
      logoTekst.innerHTML = "WebSite<br>Applikation";
      mainHeading.innerHTML = "Freelance Web<br>& App udvikler";
      iconText1.innerHTML = "Tilpasset<br>Webdesign";
      iconText2.innerHTML = "Responsivt<br>Design";
      iconText3.innerHTML = "Søgemaskine-<br>optimering (SEO)";
      iconText4.innerHTML = "Content<br>Management";
      iconText5.innerHTML = "WebSite &<br>Applikationer";
      iconText6.innerHTML = "WordPress<br>Hjemmesider";
    } else {
      logoTekst.innerHTML = "WebSite & Applikatio&<br>Lars Schou Gregersen";
      mainHeading.innerHTML = "Freelance Website  Applikationer udvikler";
      iconText1.innerHTML = "Tilpasset Webdesign";
      iconText2.innerHTML = "Responsivt Design";
      iconText3.innerHTML = "Søgemaskine-<br>optimering (SEO)";
      iconText4.innerHTML = "Content Management<br>Systemer (CMS)";
      iconText5.innerHTML = "WebSite & applikationer";
      iconText6.innerHTML = "WordPress Hjemmesider";
    
    }
  }


  // INITIAL CHECK
  updateText();

  // ON RESIZE
  window.addEventListener("resize", updateText);
});

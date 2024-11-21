(function () {
  "use strict";

  window.onload = function () {
    const subjectInput = document.getElementById("subject");
    if (subjectInput) {
      subjectInput.value = "Contact from {{ site.Title }}";
      subjectInput.parentElement.style.display = "none";
    }

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.style.display = "flex";
    }
  };
})();

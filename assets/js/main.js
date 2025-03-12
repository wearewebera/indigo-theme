(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    applyActiveNavbarLink();
  });
})();

const applyActiveNavbarLink = () => {
  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === "/" && (currentPath === "/" || currentPath === "")) {
      link.classList.add("active");
    } else if (linkHref.match(/^\/[a-z]{2}-[a-z]{2}\/?$/)) {
      if (currentPath === linkHref || currentPath === linkHref + "/") {
        link.classList.add("active");
      }
    } else if (linkHref !== "/" && currentPath.startsWith(linkHref)) {
      const nextChar = currentPath.charAt(linkHref.length);
      if (nextChar === "" || nextChar === "/" || nextChar === "#" || nextChar === "?") {
        link.classList.add("active");
      }
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (typeof window.jQuery !== "undefined") {
    $("#searchInput").on("keyup", function () {
      const query = $(this).val().toLowerCase().trim();
      $("[data-search-item]").each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.indexOf(query) > -1);
      });
    });
  }

  const totalVisits = Number(localStorage.getItem("src_total_visits") || 0) + 1;
  localStorage.setItem("src_total_visits", String(totalVisits));
  const pageCounter = document.getElementById("visitCounter");
  if (pageCounter) {
    pageCounter.textContent = String(totalVisits);
  }

  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 250) {
        backToTopBtn.classList.add("is-visible");
      } else {
        backToTopBtn.classList.remove("is-visible");
      }
    });
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

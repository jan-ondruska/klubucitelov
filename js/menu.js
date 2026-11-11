// Mobilné menu (hamburger) – otvorenie a zatvorenie navigácie
(function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("hlavne-menu");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
})();

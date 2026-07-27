document.addEventListener("DOMContentLoaded", function () {
  var boton = document.getElementById("botonMenu");
  var nav = document.getElementById("navMovil");

  if (!boton || !nav) return;

  boton.addEventListener("click", function () {
    var abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    if (abierto) {
      nav.setAttribute("hidden", "");
    } else {
      nav.removeAttribute("hidden");
    }
  });

  nav.querySelectorAll("a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
      nav.setAttribute("hidden", "");
      boton.setAttribute("aria-expanded", "false");
    });
  });
});

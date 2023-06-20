var btnMostrarMais = document.getElementById("btn-mostrar-mais");
var mais = document.getElementById("mais");

btnMostrarMais.addEventListener("click", function() {
  if (mais.style.display === "none") {
    mais.style.display = "flex";
    btnMostrarMais.innerHTML = "+ outros 11";
  } else {
    mais.style.display = "none";
    btnMostrarMais.innerHTML = "+ outros 11";
  }
});

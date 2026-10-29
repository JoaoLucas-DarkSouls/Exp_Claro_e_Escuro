var tema = localStorage.getItem("tema") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro");
document.documentElement.dataset.tema = tema;

document.getElementById("btn-tema").onclick = function () {
    var novo = document.documentElement.dataset.tema === "escuro" ? "claro" : "escuro";
    document.documentElement.dataset.tema = novo;
    localStorage.setItem("tema", novo);
  };
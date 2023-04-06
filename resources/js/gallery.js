// Burguer Menu
var burguerLinks = document.getElementById("myLinks");  

function burguerFunction() {
  if (burguerLinks.style.display === "block") {
    burguerLinks.style.display = "none";
  } else {
    burguerLinks.style.display = "block";
  }
}

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 766px)").matches) {
    burguerLinks.style.display = "none";
  } 
  
})

// COPYRIGHT DYNAMIC YEAR

const year = new Date().getFullYear();
var copyright = document.getElementById("copyright");

copyright.innerText = `© ${year} by REHABILITACIONES HIDALGO S.L.`;
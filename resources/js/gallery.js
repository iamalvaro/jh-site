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

//Gallery tab system
function openPage(pageName,elmnt,color,fontColor) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = fontColor;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// COPYRIGHT DYNAMIC YEAR

const year = new Date().getFullYear();
var copyright = document.getElementById("copyright");

copyright.innerText = `© ${year} by REHABILITACIONES HIDALGO S.L.`;
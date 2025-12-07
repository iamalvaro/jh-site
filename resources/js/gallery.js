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

//GALLERY-MODAL LOGIC

 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = document.querySelectorAll(".gallery-img");
 
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 img.forEach(e => e.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 });
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }

// COPYRIGHT DYNAMIC YEAR

const year = new Date().getFullYear();
var copyright = document.getElementById("copyright");

copyright.innerText = `© ${year}`;
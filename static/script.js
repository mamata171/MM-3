console.log("hello world")



function musicfun(){
  element = document.getElementById("photos")
  if (element.style.display === "" || element.style.display === "none") {
    element.style.display = "block";
  }
}

function musichide() {
  element = document.getElementById("photos")
  if (element.style.display === "block") {
    element.style.display = "none";
  } 

}
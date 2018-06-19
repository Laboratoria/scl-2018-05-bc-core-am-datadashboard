function myFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "menu") {
      x.className += " responsive";
  } else {
      x.className = "menu";
  }
}
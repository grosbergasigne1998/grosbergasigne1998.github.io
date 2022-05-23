//invert colors onclick function
function darkMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
  
}

//open navigation onclick function
document.getElementById("btn_nav_up").onclick= function() {navigationPopUp()};
function navigationPopUp() {
  document.getElementById("nav_content").classList.toggle("open_navigation");
}

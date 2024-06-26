var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var img3 = document.querySelector(".img3")
var img4 = document.querySelector(".img4")
var img5 = document.querySelector(".img5")
var footerCard = document.querySelector("#footer-card")
footerCard.onclick = function(){
    window.location.assign("help.html")
}
img1.onclick = function(){
    window.location.href = "kids.html"
}
if(location.reload && !navigator.onLine){
    window.location.assign("noInternet.html")
  }
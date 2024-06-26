let searchBox = document.querySelector(".searchBox")
let submitbtn = document.querySelector(".submitbtn")
//add the pages in an variables
var page1 = "electronics"
var page2 = "mobiles"
var page3 = "men"
var page4 = "woman"
var page5 = "kids"
var page6 = "home"
var page7 = "baby"
var page8 = "supermarket"
var page9 = "fashon"
//make the function of the pages
//the first page
submitbtn.onclick = function(){
if(searchBox.value.match(page2) && navigator.onLine){
  //go to the electronics page
  load.style.display = "block"
  window.location.href = "mobiles.html";
  
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page2) && !navigator.onLine){
  window.location.assign("nointernet.html")
}
else if(searchBox.value.match(page1) && navigator.onLine){
  load.style.display = "block"
  console.log(window.location.assign("electronics.html"))
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page1) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page3) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("men.html")
}//check if connected to the network show an alert  
else if(searchBox.value.match(page3) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page4) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("women.html")
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page4) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page5) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("kids.html")
  //the sixth page
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page5) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page6) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("home.html");

}
//check if connected to the network show an alert  
else if(searchBox.value.match(page6) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page7) && navigator.onLine){  
  load.style.display = "block"
  window.location.assign("baby.html")
  //the eighth page
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page7) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page8) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("supermarket.html")
  //the ninth page
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page8) && !navigator.onLine){
  alert("You Are Offline")
}
else if(searchBox.value.match(page9) && navigator.onLine){
  load.style.display = "block"
  window.location.assign("fashon.html")
}
//check if connected to the network show an alert  
else if(searchBox.value.match(page9) && !navigator.onLine){
  alert("You Are Offline")
}
else{
  window.location.assign("notfound.html")
}
}
var load = document.querySelector(".loader")
if(location.reload && !navigator.onLine){
  window.location.assign("noInternet.html")
}
load.style.display = "none"
setTimeout(function(){
  if(window.location.reload()){
    load.style.display = "block"
    document.body.style.display = "none"
  }else{
    load.style.display = "none"
    document.style.display = "block"
  }
 }, 100000);
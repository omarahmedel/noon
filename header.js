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
if(searchBox.value.match(page2)){
  //go to the electronics page
  window.location.assign("mobiles.html")
  //the second page
}else if(searchBox.value.match(page1)){
  console.log(window.location.assign("electronics.html"))
  //the third page
}else if(searchBox.value.match(page3)){
  window.location.assign("men.html")
  //the fourth page
}else if(searchBox.value.match(page4)){
  window.location.assign("women.html")
  //the fifth page
}else if(searchBox.value.match(page5)){
  window.location.assign("kids.html")
  //the sixth page
}else if(searchBox.value.match(page6)){
  window.location.assign("home.html")
  //the seventh page
}else if(searchBox.value.match(page7)){
  window.location.assign("baby.html")
  //the eighth page
}else if(searchBox.value.match(page8)){
  window.location.assign("supermarket.html")
  //the ninth pagengdjna;o
}else if(searchBox.value.match(page9)){
  window.location.assign("fashon.html")
}else{
  window.location.assign("notfound.html")
}
}
// Check you are online or not
var men = document.querySelector('.man')
var woman = document.querySelector(".woman")
var supermarket = document.querySelector('.supermarket')
var mobile = document.querySelector('.mobile')
var electronics = document.querySelector('.electronics')
var home = document.querySelector('.home')
var beauty = document.querySelector('.beauty')
var baby = document.querySelector('.baby')
var sell = document.querySelector('.sell')
var deals = document.querySelector('.deals')
men.onclick = function(){
    if (!navigator.onLine) {
        alert("Your Are Offline");
      } 
    else{
        window.location.assign("men.html")
    }  
      // To see changes in the network state, use addEventListener
      window.addEventListener("offline", (e) => {
        alert("offline");
        window.location.assign("loged.html")
      });
      
      window.addEventListener("online", (e) => {
        alert("Back Online");
      });
      
}
woman.onclick = function(){
    if (!navigator.onLine) {
        alert("Your Are Offline");
      }
    else{
        window.location.assign("woman.html")
    }  
      // To see changes in the network state, use addEventListener
      window.addEventListener("offline", (e) => {
        alert("offline");
      });
}
supermarket.onclick = function(){
    if (!navigator.onLine) {
        alert("Your Are Offline");
      } else {
        window.location.assign("supermarket.html")
      }
      
      // To see changes in the network state, use addEventListener
      window.addEventListener("offline", (e) => {
        alert("offline");
      });
      
      window.addEventListener("online", (e) => {
      });
      
}
mobile.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("mobile.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
electronics.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("electronics.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
home.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("home.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
beauty.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("beauty.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
baby.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("baby.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
sell.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("sell.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
deals.onclick = function(){
  if (!navigator.onLine) {
      alert("Your Are Offline");
    } else {
      window.location.assign("deals.html")
    }
    
    // To see changes in the network state, use addEventListener
    window.addEventListener("offline", (e) => {
      alert("offline");
    });
    
    window.addEventListener("online", (e) => {
    });
    
}
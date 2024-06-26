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
        window.location.assign("women.html")
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
      window.location.assign("mobiles.html")
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

if(location.reload && !navigator.onLine){
  window.location.assign("noInternet.html")
}
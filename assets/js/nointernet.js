var refresh = document.querySelector(".refresh")
refresh.onclick = function(){
    if(navigator.onLine){
        window.location.assign("loged.html")
    }else if(!navigator.onLine){
        location.reload()
    }
}
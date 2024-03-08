//catch the elements
var searchBox = document.querySelector('.search-box');
var inputSubmit = document.querySelector('.input-submit');

//when submit button clicked
inputSubmit.onclick = function(){
    //if the search box text is food 
    if(searchBox.value.match("food")){
        //go to food page
        console.log(window.location.assign('food.html'));
    }
    //if the search box text is supermarket
    else if(searchBox.value.match("supermarket")){
        //go to supermarket page
        console.log(window.location.assign('supermarket.html'))
    }
    //if the search box text is men 
    else if(searchBox.value.match("men")){
        // go to men page
        console.log(window.location.assign('men.html'))
    }
    //if the search box text is woman
    else if(searchBox.value.match("woman")){
        //go to woman page
        console.log(window.location.assign('women.html'))
    }
    //if the search box text is kids 
    else if(searchBox.value.match("kids")){
        //go to kids page
        console.log(window.location.assign('kids.html'))
    }
}


//login btn in header of home page after login in the login page


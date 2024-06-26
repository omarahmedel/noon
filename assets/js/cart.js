let cartButton = document.querySelector(".cart-button")
let Cart = document.querySelector(".cart")
let close = document.querySelector("#close")
let shoppingCart = document.querySelector(".shopping-cart")
//the cart buttons
let cartButton1 = document.querySelector("#cart1")
let cartButton2 = document.querySelector("#cart2")
let cartButton3 = document.querySelector("#cart3")
let cartButton4 = document.querySelector("#cart4")
let cartButton5 = document.querySelector("#cart5")

//the product carts in the shopping cart

let product1 = document.querySelector(".product1")
let product2 = document.querySelector(".product2")
let product3 = document.querySelector(".product3")
let product4 = document.querySelector(".product4")
let product5 = document.querySelector(".product5")

//remove button
let remove1 = document.querySelector(".remove1")
let remove2 = document.querySelector(".remove2")
let remove3 = document.querySelector(".remove3")
let remove4 = document.querySelector(".remove4")
let remove5 = document.querySelector(".remove5")

//price
let price = document.querySelector(".price").innerHTML =  2000

  
//clear 
let clear = document.querySelector(".clear")

//check out
let checkout = document.querySelector(".checkout-btn")
cartButton.onclick = function () {
    Cart.style.display = "block"
    cart.classList.add("cart")
    shoppingCart.classList.add("Shopping")
}

close.onclick = function () {
    Cart.style.display = "none"
}
let tot = 0
let priceNom1 = 2000
let priceNom2 = 2000
let priceNom3 = 2000
let priceNom4 = 2000
let priceNom5 = 2000

cartButton1.onclick = function () {
    Cart.style.display = "block"
    product1.style.display = "flex"
    Cart.classList.add("Cart")
    let total = document.querySelector(".tot").innerHTML = tot + priceNom1
    
}
cartButton2.onclick = function () {
    Cart.style.display = "block"
    product2.style.display = "flex"
    if (product1.style.display = "none") {
        let total = docuement.querySelector(".tot").inner = tot + priceNom2
    }
     let total = document.querySelector(".tot").innerHTML =  tot + priceNom2 + priceNom1

}
cartButton3.onclick = function () {
    Cart.style.display = "block"
    product3.style.display = "flex"
    console.log(tot + priceNom3 + priceNom1 + priceNom2)
     let total = document.querySelector(".tot").innerHTML =  tot + priceNom3 + priceNom2 + priceNom1

}
cartButton4.onclick = function () {
    Cart.style.display = "block"
    product4.style.display = "flex"
    console.log(tot + priceNom4 + priceNom3 + priceNom1 + priceNom2)
     let total = document.querySelector(".tot").innerHTML =  tot + priceNom4 + priceNom3 + priceNom2 + priceNom1

}
cartButton5.onclick = function () {
    Cart.style.display = "block"
    product5.style.display = "flex"
    console.log(tot + priceNom5 + priceNom4 + priceNom3 + priceNom1 + priceNom2)
     let total = document.querySelector(".tot").innerHTML =  tot + priceNom5 + priceNom4 + priceNom3 + priceNom2 + priceNom1

}

remove1.onclick = function () {
    product1.style.display = "none"
    let total = document.querySelector(".tot").innerHTML = priceNom2 - priceNom1

}
remove2.onclick = function () {
    product2.style.display = "none"
    console.log(priceNom1 + priceNom2 - priceNom2)
    let total = document.querySelector(".tot").innerHTML =priceNom1 + priceNom2 - priceNom1
}
remove3.onclick = function () {
    product3.style.display = "none"
    console.log(priceNom3 + priceNom1 + priceNom2 - priceNom3)
    let total = document.querySelector(".tot").innerHTML = priceNom3 + priceNom1 + priceNom2 - priceNom1
    

}
remove4.onclick = function () {
    product4.style.display = "none"
    console.log(priceNom4 + priceNom3 + priceNom1 + priceNom2 - priceNom4)
        let total = document.querySelector(".tot").innerHTML =priceNom4 + priceNom3 + priceNom1 + priceNom2 - priceNom1

}
remove5.onclick = function () {
    product5.style.display = "none"
    console.log(priceNom5 + priceNom4 + priceNom3 + priceNom1 + priceNom2 - priceNom5)
    let total = document.querySelector(".tot").innerHTML = priceNom5 + priceNom4 + priceNom3 + priceNom1 + priceNom2 - priceNom1


}

clear.onclick = function () {
    product1.style.display = "none"
    product2.style.display = "none"
    product3.style.display = "none"
    product4.style.display = "none"
    product5.style.display = "none"
    let total = document.querySelector(".tot").innerHTML = "0.00"
    alert("the cart is empty")
}
checkout.oncilck = function () {
    alert("Are you sure you need the products")
}
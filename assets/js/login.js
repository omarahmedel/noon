//login
var emailInput = document.querySelector('.email-input');
var passwordInput = document.querySelector('.password-input');
var submitBtn = document.querySelector('.submitBtn')
var clear = document.querySelector('.clearBtn')
var emailInvalid = document.querySelector('.invalid-email')
var passwordInvalid = document.querySelector('.invalid-password')
var emailwrong = document.querySelector('.wrong-email')
var passwordwrong = document.querySelector('.wrong-password')
console.log(emailwrong)
console.log(passwordwrong)
//make variables of the true emails
email1 = "omarhabashy442@gmail.com"
//make variables of the true passwords
password1 = "omarhabashy"
//make a variable
var i = 1
//the first email and password
submitBtn.onclick = function(){
if(emailInput.value.match(email1) && passwordInput.value.match(password1)){
window.location.assign("loged.html")
window.localStorage.setItem("email",email1)
window.localStorage.setItem("password",password1)
}else if(!emailInput.value.match(email1) && passwordInput.value.match(password1)){
emailInvalid.style.display = 'block';
console.log(i++);
}else if(emailInput.value.match(email1) && !passwordInput.value.match(password1)){
passwordInvalid.style.display = 'block'
console.log(i++)
}else if(!emailInput.value.match(email1) && !passwordInput.value.match(password1)){
emailInvalid.style.display = 'block'
passwordInvalid.style.display = 'block'
console.log(i++)
}
}
clear.onclick = function(){
emailInput.value = ''
passwordInput.value = ''
emailInvalid.style.display = 'none'
passwordInvalid.style.display = 'none'
}
console.log(emailInput)
console.log(passwordInput)
console.log(submitBtn)
console.log(emailInvalid)
console.log(passwordInvalid)
console.log(clear)

/*else if(emailInput.value.match(email2) && passwordInput.value.match(password2)){
window.location.assign("food.html")
}else if(emailInput.value.match(email3) && passwordInput.value.match(password3)){
window.location.assign("food.html")
}else if(emailInput.value.match(email4) && passwordInput.value.match(password4)){
window.location.assign("food.html")
}else if(emailInput.value.match(email5) && passwordInput.value.match(password5)){
window.location.assign("food.html")
}
*/


const loginButton = document.getElementById('loginButton');
const closeButton = document.getElementById('closeButton');
const createAccountButton = document.getElementById('createAccount');
const overlay = document.getElementById('overlay');
const formInputSearchBar  = document.getElementById("content");
const containerBtn = document.getElementById("container");


loginButton.addEventListener('click', function(){
    containerBtn.style.display = 'none';
})

loginButton.addEventListener('click', function(){
   
    formInputSearchBar.style.display = 'none';
})

closeButton.addEventListener('click', function(){
    formInputSearchBar.style = 'display';
})

loginButton.addEventListener('click', function() {
    overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
});




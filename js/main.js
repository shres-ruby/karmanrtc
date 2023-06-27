//logo spinner start
var preloader = document.getElementById("loader");


window.addEventListener("load", function(){
    this.setTimeout(function(){
        preloader.style.display = "none";}, 2000)
    
});
//logo spinner end



//hamburger menu start
const menu_btn = document.querySelector('.hamburger');
const navmenu = document.querySelector('nav');
window.addEventListener("click", function(){
    menu_btn.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');
});
//hamburger menu end

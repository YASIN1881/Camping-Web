const navBtn = document.querySelector('.nav__btn')
const navMenu = document.querySelector('.nav-menu')
let isOpenNav = false 

navBtn.addEventListener('click',function(){
    if(isOpenNav){
        navBtn.classList.remove('nav__btn--open')
        navMenu.classList.remove('nav-menu--open')
        isOpenNav = false
    }else{
        navBtn.classList.add('nav__btn--open')
        navMenu.classList.add('nav-menu--open')
        isOpenNav = true
    }
})
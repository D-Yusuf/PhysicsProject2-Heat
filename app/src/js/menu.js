const normalMenu = document.querySelector('#normal-menu-list')

const burgerContainer = document.querySelector('#buger-container')
const burgerMenu = document.querySelector('#burger-menu-list')
const burgerBtn = document.querySelector('#burger-btn')
const bugerIcon = document.querySelector('#burger-icon')

function isChecked(){
    if(burgerBtn.checked){
        burgerMenu.classList.remove('hidden')
        burgerMenu.classList.add('animate-slide')
        
        bugerIcon.classList.add('rotate-90')
    }else{
        
        burgerMenu.classList.add('hidden')
        bugerIcon.classList.remove('rotate-90')
    }
}
burgerBtn.addEventListener('change', isChecked)
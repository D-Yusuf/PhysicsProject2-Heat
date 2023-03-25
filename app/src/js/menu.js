const normalMenu = document.querySelector('#normal-menu-list')

const burgerContainer = document.querySelector('#buger-container')
const burgerMenu = document.querySelector('#burger-menu-list')
const burgerBtn = document.querySelector('#burger-btn')
const bugerIcon = document.querySelector('#burger-icon')

//-----------------------------------------------------------//
burgerBtn.addEventListener('change', isChecked)
function isChecked(){
    if(burgerBtn.checked){
        burgerMenu.classList.remove('hidden')
        burgerMenu.classList.remove('animate-remove-slide')
        burgerMenu.classList.add('animate-slide')
        
        bugerIcon.classList.add('rotate-90')
    }else{
        
        burgerMenu.classList.remove('animate-slide')
        burgerMenu.classList.add('animate-remove-slide')
        bugerIcon.classList.remove('rotate-90')
        setTimeout(()=>{burgerMenu.classList.add('hidden')}, 500)
    }
}
//-----------------------------------------------------------//

// remove menu when clicking links
burgerMenu.addEventListener('click', (e)=>{

        burgerMenu.classList.add('hidden')
        bugerIcon.classList.remove('rotate-90')
        console.log(burgerMenu)
        console.log('aaa')
     
})
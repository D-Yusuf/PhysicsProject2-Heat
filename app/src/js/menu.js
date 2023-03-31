const normalMenu = $('#normal-menu-list');

const burgerContainer = $('#buger-container');
const burgerMenu = $('#burger-menu-list');
const burgerBtn = $('#burger-btn');
const bugerIcon = $('#burger-icon');

//-----------------------------------------------------------//
burgerBtn.on('change', isChecked);
function isChecked(){
    if(burgerBtn.prop('checked')){
        burgerMenu.removeClass('hidden animate-remove-slide').addClass('animate-slide');
        
    } else {
        burgerMenu.removeClass('animate-slide').addClass('animate-remove-slide');
        
        setTimeout(() => {
            burgerMenu.addClass('hidden');
        }, 500);
    }
}
//-----------------------------------------------------------//

// remove menu when clicking links
burgerMenu.on('click', (e) => {
    burgerMenu.addClass('hidden');
    
    console.log(burgerMenu);
    console.log('aaa');
});
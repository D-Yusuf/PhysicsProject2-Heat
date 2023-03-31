const normalMenu = $('#normal-menu-list');
const burgerContainer = $('#buger-container');
const burgerMenu = $('#burger-menu-list');
const burgerBtn = $('#burger-btn');
const bugerIcon = $('#burger-icon');

burgerBtn.on('change', isChecked);

function isChecked() {
  if (burgerBtn.prop('checked')) {
    burgerMenu.removeClass('hidden animate-remove-slide').addClass('animate-slide');
    $('body').addClass('overflow-hidden'); // add class to body to disable scrolling
  } else {
    burgerMenu.removeClass('animate-slide').addClass('animate-remove-slide');
    addHiddenClass();
    $('body').removeClass('overflow-hidden'); // remove class to body to enable scrolling
  }
}

// remove menu when clicking links
burgerMenu.on('click', (e) => {
  burgerMenu.removeClass('animate-slide').addClass('animate-remove-slide');
  addHiddenClass();
  burgerBtn.prop('checked', false);
  $('body').removeClass('overflow-hidden'); // remove class to body to enable scrolling
});

function addHiddenClass() {
  setTimeout(() => {
    burgerMenu.addClass('hidden');
  }, 500);
}


const refs = {
  navEl: document.querySelector('.nav'),
  closeBtn: document.querySelector('.js-close-menu'),
};

refs.closeBtn.addEventListener('click', onCloseClick);

function onCloseClick() {
  refs.navEl.classList.add('nav--hidden');
}

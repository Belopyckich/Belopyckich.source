function hamburger() {
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close'),
      link = document.querySelector('.menu__list');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        hamburger.classList.add('active');
    });

    closeElement.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });

    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    });
}
export default hamburger;
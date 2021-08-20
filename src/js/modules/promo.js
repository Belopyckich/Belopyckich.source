function promo() {
    const promo = document.querySelector('.promo__wrapper');
    window.addEventListener('scroll', (e) => {

        const height = e.target.documentElement.clientHeight - 320,
              scroll = e.target.documentElement.scrollTop,
              neededOpacity = scroll/height;
        promo.style.opacity = 1 - neededOpacity; 

        if (promo.style.opacity <= 0.3)
        {
            promo.style.opacity = 0;
        }

        if (scroll > 1000) {
            promo.style.display = 'none';
        } else {
            promo.style.display = 'block';
        }

    });

    //promo arrow event

    const check = document.querySelector('.pagedown');

    check.addEventListener('click', () => {
        document.documentElement.scrollTop = document.documentElement.clientHeight;
    });
}
export default promo;
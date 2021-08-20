function pageup() {
    const up = document.querySelector('.pageup');

    window.addEventListener('scroll', (e) => {
        if(e.target.documentElement.scrollTop > 1100) {
            up.style.display = 'block';
        } else {
            up.style.display = 'none';
        }
        if (e.target.documentElement.scrollTop > 1600) {
            up.classList.add('pageup__active');
        }
        else {
            document.querySelector('.pageup').classList.remove('pageup__active');
        }
    });
}
export default pageup;
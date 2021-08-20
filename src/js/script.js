'use strict';

import WOW from './libs/wow.min.js';
import './libs/just-validate.min.js';
import form from './modules/form';
import hamburger from './modules/hamburger';
import language from './modules/language';
import pageup from './modules/pageup';
import promo from './modules/promo';

window.addEventListener('DOMContentLoaded', () => {
    new WOW().init();
    form();
    hamburger();
    language();
    pageup();
    promo();
});

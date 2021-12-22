import promo from "./promo";

function language() {

    const langMenu = document.querySelector('.language__menu'),
    langArrow = document.querySelector('.language__arrow'),
    langWrapper = document.querySelector('.language__wrapper'),
    langElements = document.querySelectorAll('.language__list__text'),
    promoEng = document.querySelector('.promo__greetings'),
    langTitle = document.querySelector('.language__text'),
    langPrev = document.querySelector('.language__prev'),

    panelDescr = document.querySelector('.panel__descr span'),
    promoGreetings = document.querySelector('.promo__greetings'),
    promoTitle = document.querySelector('.promo__title'),
    aboutTitle = document.querySelector('.about__title'),
    aboutDescr = document.querySelector('.about__descr'),
    expTitle = document.querySelector('.expirience__title'),
    expColumnTitle = document.querySelectorAll('.expirience__column__title'),
    expItemName = document.querySelectorAll('.expirience__item__name'),
    expItemLocation = document.querySelectorAll('.expirience__item__location'),
    skillsTitle = document.querySelector('.skills__title'),
    skillsItemTitle = document.querySelectorAll('.skills__item__title'),
    skillsItemDescr = document.querySelectorAll('.skills__item__descr'),
    portfolioTitle = document.querySelector('.portfolio__title'),
    portfolioItemTitle = document.querySelectorAll('.portfolio__item__title'),
    portfolioItemDescr = document.querySelectorAll('.portfolio__item__descr'),
    contactsTitle = document.querySelector('.contacts__title'),
    contactsDescrTitle = document.querySelector('.contacts__descr__title'),
    contactsDescrText = document.querySelectorAll('.contacts__descr__text'),
    contactsFormLabel = document.querySelectorAll('.contacts__form__label'),
    contactsBtn = document.querySelector('.contacts__btn'),
    contactsPolicySpan = document.querySelector('.contacts__policy__span'),
    contactsPrivacyPolicy = document.querySelector('.contacts__privacy__policy'),
    menuText = document.querySelectorAll('.menu__text');
    let language;

    function russianTranslation() {
        menuText[0].textContent = 'Обо мне';
        menuText[1].textContent = 'Мой опыт';
        menuText[2].textContent = 'Мои навыки';
        menuText[3].textContent = 'Мои работы';
        menuText[4].textContent = 'Контакты';
        panelDescr.textContent = 'Социальные сети';
        promoGreetings.textContent = 'Привет! Меня зовут Евгений.';
        promoTitle.textContent = 'Я — Джуниор-разработчик.';
        aboutTitle.textContent = 'Обо мне';
        aboutDescr.textContent = 'Я учусь в БГУИРЕ по специальности "Инженер-Системотехник". В течении 2 лет я искал язык программирования, который мне бы понравился. Я разрабатывал файловый менеджер на языке Python для курсового проекта, создавал небольшие программы по выводу статистики пользователей по шагам за месяц на WPF, а также создал свой сайт портфолио на CSS/HTML/JavaScript и понял что JavaScript - это тот язык программирования, с которым я бы хотел связать свою жизнь. Последнее приложение что я создал, это сайт покемонов написанный на TypeScript/React/Redux/Axios. В данный момент я ищу работу, где я бы мог показать свои знания и узнать что-нибудь новое.';
        expTitle.textContent = 'Опыт';
        expColumnTitle[0].textContent = 'Образование';
        expColumnTitle[1].textContent = 'Опыт работы';
        expItemName[0].textContent = 'МГК Электроники';
        expItemName[1].textContent = 'МГК Электроники';
        expItemName[2].textContent = 'БГУИР';
        expItemName[3].textContent = 'Интеграл';
        expItemLocation[0].textContent = 'Оператор ЭВМ Минск | (2014-2017)';
        expItemLocation[1].textContent = 'Техник-Технолог | Минск (2017-2019)';
        expItemLocation[2].textContent = 'Инженер-Системотехник | Минск (2019-2023)';
        expItemLocation[3].textContent = 'Оператор ЭВМ | Минск (2019-2021)';
        skillsTitle.textContent = 'Навыки';
        skillsItemTitle[0].textContent = 'React';
        skillsItemTitle[1].textContent = 'Redux';
        skillsItemTitle[2].textContent = 'C#';
        skillsItemTitle[3].textContent = 'Python';
        skillsItemTitle[4].textContent = 'Microsot Sql Server';
        skillsItemTitle[5].textContent = 'HTML5';
        skillsItemTitle[6].textContent = 'CSS3';
        skillsItemTitle[7].textContent = 'TypeScript';
        skillsItemTitle[8].textContent = 'JavaScript';
        skillsItemTitle[9].textContent = 'Jquery';
        skillsItemDescr[0].textContent = 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.';
        skillsItemDescr[1].textContent = 'Библиотека управления состоянием для приложений, написанных на JavaScript.';
        skillsItemDescr[2].textContent = 'Современный объектно-ориентированный и типобезопасный язык программирования, позволяющий создавать множество типов безопасных и надежных приложений, работающих в экосистеме .NET.';
        skillsItemDescr[3].textContent = 'Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.';
        skillsItemDescr[4].textContent = 'Система управления реляционными базами данных (РСУБД), используящая язык запросов — Transact-SQL.';
        skillsItemDescr[5].textContent = 'Язык гипертекстовой разметки позволяющий разрабатывать каркас сайта или приложения.';
        skillsItemDescr[6].textContent = 'Язык стилей, позволяющий прикреплять стиль к структурированным документам (например, документам HTML и приложениям XML)';
        skillsItemDescr[7].textContent = 'Компилируемое надмножество JavaScript, приносящее опциональную статическую типизацию и некоторые возможности современных стандартов ECMAScript.';
        skillsItemDescr[8].textContent = 'Динамический язык программирования, который применяется к HTML документу, и может обеспечить динамическую интерактивность на веб-сайтах.';
        skillsItemDescr[9].textContent = 'Javasript библиотека, помогающая уменьшить количество необходимого кода, параллельно увеличивающая функционал языка.';
        portfolioTitle.textContent = 'Портфолио';
        portfolioItemTitle[0].textContent = '«PyCommander»';
        portfolioItemDescr[0].innerHTML = 'Приложение «PyCommander», предназначено для упрощения работы пользователя в операционной системе с папками и файлами. Основным функционалом данного приложения является простой и быстрый переход по иерархической файловой системе. Также данная программа обладает следующим функционалом:<br><br>- просмотр файлов и каталогов;<br>- копирование файлов и каталогов;<br>- удаление файлов и каталогов;<br>- создание файлов и каталогов;<br>- перемещение файлов и каталогов';
        portfolioItemTitle[1].textContent = '«Pokedex»';
        portfolioItemDescr[1].innerHTML = 'Приложение «Pokedex», предназначено для просмотра библиотеки покемонов. Написано на библиотеке React, Redux и Axios.Основным функционалом данного приложения является:<br><br>- сортировка покемонов по свойствам, типу и т.д;<br>- добавлять покемона в избранное;<br>- просмотр  информации по отдельному покемону;';
        contactsTitle.textContent = 'Контакты';
        contactsDescrTitle.textContent = 'Свяжитесь со мной';
        contactsDescrText[0].textContent = 'Любым удобным для вас способом:';
        contactsDescrText[1].textContent = 'Или оставьте ваши данные и я сам вам напишу:';
        contactsFormLabel[0].textContent = 'Ваше имя';
        contactsFormLabel[1].textContent = 'Ваша почта';
        contactsFormLabel[2].textContent = 'Ваше сообщение';
        contactsBtn.textContent = 'Отправить сообщение';
        contactsPolicySpan.textContent = 'Я согласен(а) с ';
        contactsPrivacyPolicy.textContent = 'политикой конфиденциальности';
    }

    function englishTranslation() {
        menuText[0].textContent = 'About me';
        menuText[1].textContent = 'Experience';
        menuText[2].textContent = 'Skills';
        menuText[3].textContent = 'Portfolio';
        menuText[4].textContent = 'Contacts';
        panelDescr.textContent = 'Social Networks';
        promoGreetings.textContent = 'Hello! My name is Eugene.';
        promoTitle.textContent = `I'm — Junior Developer`;
        aboutTitle.textContent = 'About me';
        aboutDescr.textContent = `I am studying at BSUIR with a degree in "System Engineer". For 2 years I have been looking for a programming language that I would like. I developed a file manager in Python for a course project, created small programs for displaying user statistics in steps per month on WPF, and also created my portfolio website in CSS/HTML/JavaScript and realized that JavaScript is the programming language with which I would like to connect my life. The last application I created was a Pokemon website written in TypeScript/React/Redux/Axios. At the moment I am looking for a job where I could show my knowledge and learn something new.`;
        expTitle.textContent = 'Experience';
        expColumnTitle[0].textContent = 'Education';
        expColumnTitle[1].textContent = 'Work expirience';
        expItemName[0].textContent = 'MSC of Electonics';
        expItemName[1].textContent = 'MSC of Electonics';
        expItemName[2].textContent = 'BSUIR';
        expItemName[3].textContent = 'Integral';
        expItemLocation[0].textContent = 'Computer Operator | Minsk (2014-2017)';
        expItemLocation[1].textContent = 'Technician and technologist | Minsk (2017-2019)';
        expItemLocation[2].textContent = 'System Engineer | Минск (2019-2023)';
        expItemLocation[3].textContent = 'Computer Operator | Minsk (2019-2021)';
        skillsTitle.textContent = 'Skills';
        skillsItemDescr[0].textContent = 'An open source javasript library for developing user interfaces.';
        skillsItemDescr[1].textContent = 'A state management library for applications written in JavaScript.';
        skillsItemDescr[2].textContent = 'Modern object-oriented and type-safe programming language that allows you to create many types of secure and reliable applications running in the .NET ecosystem.';
        skillsItemDescr[3].textContent = 'High-level general-purpose programming language with dynamic strong typing and automatic memory management.';
        skillsItemDescr[4].textContent = 'Relational database management system (RDBMS) using the query language — Transact-SQL.';
        skillsItemDescr[5].textContent = 'Hypertext markup language that allows you to develop a website or application framework.';
        skillsItemDescr[6].textContent = 'Style language that allows you to attach a style to structured documents (for example, HTML documents and XML applications)';
        skillsItemDescr[7].textContent = 'A compiled superset of JavaScript that brings optional static typing and some features of modern ECMAScript standards.';
        skillsItemDescr[8].textContent = 'Dynamic programming language that is applied to an HTML document, and can provide dynamic interactivity on websites.';
        skillsItemDescr[9].textContent = 'Javascript Library that helps to reduce the amount of necessary code, while simultaneously increasing the functionality of the language.';
        portfolioTitle.textContent = 'Portfolio';
        portfolioItemDescr[0].innerHTML = `Application «PyCommander», intended to simplify the user's work with folders and files in the operating system. The main functionality of this application is and fast transition through the hierarchical file system. Also, this program has the following functionality:<br><br>- viewing files and directories;<br>- copying files and directories;<br>- deleting files and directories;<br>- creating files and directories;<br>- moving files and directories`;
        portfolioItemDescr[1].innerHTML = `The application "Pokedex" is designed to view the Pokemon library. Written in React, Redux and Axios libraries.The main functionality of this application is:<br><br>- sort pokemon by properties, type, etc;<br>- add pokemon to favorites;<br>- view information on an individual pokemon`;
        contactsTitle.textContent = 'Contacts';
        contactsDescrTitle.textContent = 'Contact with me';
        contactsDescrText[0].textContent = 'In any convenient way.';
        contactsDescrText[1].textContent = 'Or leave your details and I will write to you myself:';
        contactsFormLabel[0].textContent = 'Your name';
        contactsFormLabel[1].textContent = 'Your email';
        contactsFormLabel[2].textContent = 'Your message';
        contactsBtn.textContent = 'Send a message';
        contactsPolicySpan.textContent = 'I agree with';
        contactsPrivacyPolicy.textContent = 'privacy policy';
    }

    if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    } else {
    language = 'rus';
    localStorage.setItem('language', 'rus');
    }

    function menuSelector() {
    langMenu.classList.toggle('language__menu__active');
    langArrow.classList.toggle('language__arrow__active');
    langWrapper.classList.toggle('language__wrapper__active');
    }

    langPrev.addEventListener('click', (e) => {
        e.preventDefault();
        menuSelector();
    });

    function updateMenuInfo(array, title) {
    array.forEach(element => {
    element.classList.remove('language__list__text__active');
    });

    array.forEach(element => {
    if(element.getAttribute('id') == language) {
        element.classList.add('language__list__text__active');
        title.textContent = element.outerText;
        if (language == 'eng') {
            englishTranslation();
        }
        if (language == 'rus') {
            russianTranslation();
        }    
    }
    });
    }

    updateMenuInfo(langElements, langTitle);

    function languageChangeEvent(elements, title){
    elements.forEach(e => {
    e.addEventListener('click', (e) => {
        language = e.target.getAttribute('id');
        localStorage.setItem('language', language);
        updateMenuInfo(elements, title);
        menuSelector();
    });
    });

    }

    languageChangeEvent(langElements,langTitle);
}
export default language;
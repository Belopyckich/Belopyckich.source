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
    portfolioItemTitle = document.querySelector('.portfolio__item__title'),
    portfolioItemDescr = document.querySelector('.portfolio__item__descr'),
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
        aboutDescr.textContent = 'Мне 22 года. Я учусь на  3 курсе Белорусского Государственного Университета по специальности "Инженер-Системотехник" и мечтаю устроиться работать на позицию джуниор-разработчика. В данный момент я отработал обязательную практику на предприятии и ищу компанию где могу самосовершенствоваться и расти по своей специальности. У меня небольшой опыт работы и есть выполненые курсовые проекты на разных языках программирвания. Этим летом я осваивал базовую верстку, язык стилей и писал простые скрипты на javascript, сейчас я изучаю Asp.Net Core и ищу стажировку, где смогу показать свои знания и попробовать что-нибудь новое. Спасибо за внимание.';
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
        skillsItemTitle[0].textContent = 'C++';
        skillsItemTitle[1].textContent = 'C#';
        skillsItemTitle[2].textContent = 'Python';
        skillsItemTitle[3].textContent = 'Microsot Sql Server';
        skillsItemTitle[4].textContent = 'HTML5';
        skillsItemTitle[5].textContent = 'CSS3';
        skillsItemTitle[6].textContent = 'JavaScript';
        skillsItemTitle[7].textContent = 'Jquery';
        skillsItemDescr[0].textContent = 'Компилируемый, высокоуровневый язык программирования, предназначенный для разработки разнообразных приложений.';
        skillsItemDescr[1].textContent = 'Современный объектно-ориентированный и типобезопасный язык программирования, позволяющий создавать множество типов безопасных и надежных приложений, работающих в экосистеме .NET.';
        skillsItemDescr[2].textContent = 'Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью.';
        skillsItemDescr[3].textContent = 'Система управления реляционными базами данных (РСУБД), используящая язык запросов — Transact-SQL.';
        skillsItemDescr[4].textContent = 'Язык гипертекстовой разметки позволяющий разрабатывать каркас сайта или приложения.';
        skillsItemDescr[5].textContent = 'Язык стилей, позволяющий прикреплять стиль к структурированным документам (например, документам HTML и приложениям XML)';
        skillsItemDescr[6].textContent = 'Динамический язык программирования, который применяется к HTML документу, и может обеспечить динамическую интерактивность на веб-сайтах.';
        skillsItemDescr[7].textContent = 'Библиотека, помогающая уменьшить количество необходимого кода, параллельно увеличивающая функционал языка.';
        portfolioTitle.textContent = 'Портфолио';
        portfolioItemTitle.textContent = '«PyCommander»';
        portfolioItemDescr.innerHTML = 'Приложение «PyCommander», предназначено для упрощения работы пользователя в операционной системе с папками и файлами. Основным функционалом данного приложения является простой и быстрый переход по иерархической файловой системе. Также данная программа обладает следующим функционалом:<br><br>- просмотр файлов и каталогов;<br>- копирование файлов и каталогов;<br>- удаление файлов и каталогов;<br>- создание файлов и каталогов;<br>- перемещение файлов и каталогов';
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
        menuText[1].textContent = 'Expirience';
        menuText[2].textContent = 'Skills';
        menuText[3].textContent = 'Portfolio';
        menuText[4].textContent = 'Contacts';
        panelDescr.textContent = 'Social Networks';
        promoGreetings.textContent = 'Hello! My name is Eugene.';
        promoTitle.textContent = `I'm — Junior Developer`;
        aboutTitle.textContent = 'About me';
        aboutDescr.textContent = `I am 22 years old. I am a 3rd-year student of the Belarusian State University with a degree in "System Engineer" and I dream of getting a job as a junior developer. At the moment, I have completed a mandatory internship at the enterprise and am looking for a company where I can improve myself and grow in my specialty. I have little work experience and have completed course projects in various programming languages. This summer I mastered the basic layout, the style language and wrote simple scripts in javascript, now I'm studying Asp.I am looking for an internship where I can show my knowledge and try something new. Thanks for attention.`;
        expTitle.textContent = 'Expirience';
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
        skillsItemDescr[0].textContent = 'Compiled, high-level programming language designed for developing a variety of applications.';
        skillsItemDescr[1].textContent = 'Modern object-oriented and type-safe programming language that allows you to create many types of secure and reliable applications running in the .NET ecosystem.';
        skillsItemDescr[2].textContent = 'High-level general-purpose programming language with dynamic strong typing and automatic memory management.';
        skillsItemDescr[3].textContent = 'Relational database management system (RDBMS) using the query language — Transact-SQL.';
        skillsItemDescr[4].textContent = 'Hypertext markup language that allows you to develop a website or application framework.';
        skillsItemDescr[5].textContent = 'Style language that allows you to attach a style to structured documents (for example, HTML documents and XML applications)';
        skillsItemDescr[6].textContent = 'Dynamic programming language that is applied to an HTML document, and can provide dynamic interactivity on websites.';
        skillsItemDescr[7].textContent = 'Library that helps to reduce the amount of necessary code, while simultaneously increasing the functionality of the language.';
        portfolioTitle.textContent = 'Portfolio';
        portfolioItemDescr.innerHTML = `Application «PyCommander», intended to simplify the user's work with folders and files in the operating system. The main functionality of this application is and fast transition through the hierarchical file system. Also, this program has the following functionality:<br><br>- viewing files and directories;<br>- copying files and directories;<br>- deleting files and directories;<br>- creating files and directories;<br>- moving files and directories`;
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
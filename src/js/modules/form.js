function form() {
    function createForm() {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal__wrapper">
            <div class="modal__text"></div>
        </div>
        `;
        document.querySelector('body').append(modal);
        return modal;
    }

    const modal = createForm();

    const contactsForm = document.querySelector('.contacts__form'),
          textForm = document.querySelector('.modal__text'); 

    let validateForms = function(selector, rules, modal) {
        new window.JustValidate(selector, {
            rules: rules,
            submitHandler: function(form) {

                const formData = new FormData(form);
                // const object = {};
                // formData.forEach(function(value, key) {
                //     object[key] = value;
                // });

                // const json = JSON.stringify(object);

                fetch('mailer/smart.php', {
                    method: "POST",
                    // headers: {
                    //     'Content-type': 'application/json'
                    // },
                    body: formData
                }).then(data => data.text())
                .then(data => {
                    console.log(data);
                    textForm.textContent = 'Спасибо, Я скоро с вами свяжусь';
                }).catch(() => {
                    console.log('failure');
                    textForm.textContent = 'Что-то пошло не так';   
                }).finally(() => {
                    modal.classList.add('modal__active');
                    document.body.style.overflow = 'hidden';
                    form.reset();
                    setTimeout( () => {
                        modal.classList.remove('modal__active');
                        document.body.style.overflow = '';
                    }, 2500);
                });
            }
        });
    };

    validateForms('.contacts__form', {
        email: {
            required: true, 
            email: true
        }, 
        name: {
            required: true, 
            minLength: 2, 
            maxLength: 8
        }, text: {
            required:true
        }}, modal);
}
export default form;
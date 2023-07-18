const form = document.querySelector('.contacts__form');
const telSelector = document.querySelector('.tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.contacts__form', {
  colorWrong: '#bb370e'
});

validation
  .addField('.name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Вы ввели больше, чем положено'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя',
    }
  ])
  .addField('.mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Введите корректный e-mail',
    },
  ])
  .addField('.tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон',
    },
    {
      rule: 'function',
      validator: function() {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

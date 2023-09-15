import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
let formData = {};


loadForm()

function loadForm() {

    let formLoad = JSON.parse(localStorage.getItem(localStorageKey));
    if (!formLoad) {
      return;
    }
    else {
    formData = formLoad;
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
    }

}

form.addEventListener("input", throttle(onInput, 500 ));
form.addEventListener("submit", onSubmit );


function onInput (event) {

  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));

}


function onSubmit (event) {

  event.preventDefault();

  if (!event.target.email.value || !event.target.message.value) {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(localStorageKey);

}





// HTML містить розмітку форми. Напиши скрипт, який буде зберігати
// значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js.
// Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
// об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
// заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
// об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


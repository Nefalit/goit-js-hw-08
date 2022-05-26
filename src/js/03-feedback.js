import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');
const KEY_STORAGE = 'feedback-form-state';

formEl.addEventListener('input', throttle(inputData, 500));
formEl.addEventListener('submit', submitForm);

const formData = {};

fillForm(formEl);

function fillForm(form) {
  const storageData = JSON.parse(localStorage.getItem(KEY_STORAGE));
    const formElements = form.elements;

  for (const key in storageData) {
    if (storageData.hasOwnProperty(key)) {
      formElements[key].value = storageData[key];
    }
  }
}

function inputData(ev) {
  const { target } = ev;
  const userValue = target.value;
  const formName = target.name;
  formData[formName] = userValue;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function submitForm(ev) {
    ev.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
    localStorage.removeItem(KEY_STORAGE);
    ev.target.reset();
}

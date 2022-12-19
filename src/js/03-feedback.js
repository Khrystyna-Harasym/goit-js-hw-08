import throttle from 'lodash.throttle'; 

const obj = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector(".feedback-form textarea"),
};

obj.form.addEventListener('submit', onSubmit);
obj.form.addEventListener('input', throttle(onInput, 500));

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();

    localStorage.removeItem('feedback-form-state');
    formData ={};

}

function onInput() {
    const value = {
        email: obj.email.value,
        message: obj.message.value,
    };
      localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

saveData();
function saveData() {
  let info = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (info) {
    obj.email.value = info.email || "";
    obj.message.value = info.message || "";
    formData = info;
  }
}


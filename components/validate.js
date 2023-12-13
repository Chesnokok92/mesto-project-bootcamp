const newPictureButton = document.getElementById('newPictureButtonAdd');
//переменные для валидации имени пользователя
const formInputName = document.querySelector('.pop-up_name')
const formErrorName = document.querySelector('.pop-up__errors_name');

//функция показа валидации
const showErrorName = (input, errorMessage) => {
  formInputName.classList.add('pop-up__errors_active');
  formErrorName.textContent = errorMessage;
  formErrorName.classList.add('pop-up__errors_active');
};

const hideErrorName = (input) => {
  input.classList.remove('form__input_type_error');
  formErrorName.classList.remove('pop-up__errors_active');
  formErrorName.textContent = '';
};

const checkInputValidityName = () => {
  if (!formInputName.validity.valid) {
    showErrorName(formInputName, formInputName.validationMessage);
  } else {
    hideErrorName(formInputName);
  }
  toggleButtonStateNameAndInfo();
};

formInputName.addEventListener('input', function (evt) {
    evt.preventDefault();
  checkInputValidityName();
});

//переменные для валидации о себе
const formInputInfo = document.getElementById('inputInfo')
const formErrorInfo = document.querySelector('.pop-up__errors_info');


//функция показа валидации поля о себе
const showErrorInfo = (input, errorMessage) => {
    formErrorInfo.classList.add('pop-up__errors_active');
    formErrorInfo.textContent = errorMessage;
    formErrorInfo.classList.add('pop-up__errors_active');
};

const hideErrorInfo = (input) => {
  input.classList.remove('form__input_type_error');
  formErrorInfo.classList.remove('pop-up__errors_active');
  formErrorInfo.textContent = '';
};

const checkInputValidityInfo = () => {
  if (!formInputInfo.validity.valid) {
    showErrorInfo(formInputInfo, formInputInfo.validationMessage);
  } else {
    hideErrorInfo(formInputInfo);
  }
  toggleButtonStateNameAndInfo();
};

formInputInfo.addEventListener('input', function (evt) {
    evt.preventDefault();
  checkInputValidityInfo();
});


//переменные для валидации названия картинки
const forminputTitle = document.getElementById('inputTitle');
const formErrorTitle = document.querySelector('.pop-up__errors_title');


//функция показа валидации поля о себе
const showErrorTitle = (input, errorMessage) => {
    formErrorTitle.classList.add('pop-up__errors_active');
    formErrorTitle.textContent = errorMessage;
    formErrorTitle.classList.add('pop-up__errors_active');
};

const hideErrorTitle = (input) => {
  input.classList.remove('form__input_type_error');
  formErrorTitle.classList.remove('pop-up__errors_active');
  formErrorTitle.textContent = '';
};

const checkInputValidityTitle = () => {
  if (!forminputTitle.validity.valid) {
    showErrorTitle(forminputTitle, forminputTitle.validationMessage);
  } else {
    hideErrorTitle(forminputTitle);
  }
  toggleButtonStateNewPictures();
};

forminputTitle.addEventListener('input', function (evt) {
    evt.preventDefault();
  checkInputValidityTitle();
});

//переменные для валидации ссылки картинки
const forminputLink = document.getElementById('inputLinkPicture');
const formErrorLink = document.querySelector('.pop-up__errors_link');
export {formErrorLink};


//функция показа валидации поля о себе
const showErrorLink = (input, errorMessage) => {
    formErrorLink.classList.add('pop-up__errors_active');
    formErrorLink.textContent = errorMessage;
    formErrorLink.classList.add('pop-up__errors_active');
};

const hideErrorLink = (input) => {
  input.classList.remove('form__input_type_error');
  formErrorLink.classList.remove('pop-up__errors_active');
  formErrorLink.textContent = '';
};

const checkInputValidityLink = () => {
  if (!forminputLink.validity.valid) {
    showErrorLink(forminputLink, forminputLink.validationMessage);
  } else {
    hideErrorLink(forminputLink);
  }
  toggleButtonStateNewPictures();
};

forminputLink.addEventListener('input', function (evt) {
    evt.preventDefault();
  checkInputValidityLink();
});
// переменные кнопок
const editButtonNameAndInfo = document.getElementById('buttonEdit');

//проверка кнопки обновления инфо профиля
const toggleButtonStateNameAndInfo = () => {
    const isFormValid = formInputName.validity.valid && formInputInfo.validity.valid;
    if (isFormValid) {
        editButtonNameAndInfo.removeAttribute('disabled');
        editButtonNameAndInfo.classList.add('pop-up__button-edit_active');
    } else {
        editButtonNameAndInfo.setAttribute('disabled', true);
        editButtonNameAndInfo.classList.remove('pop-up__button-edit_active');
    }
  };

  const toggleButtonStateNewPictures = () => {
    // Проверка валидности всех полей формы
    const isFormValid = forminputTitle.validity.valid && forminputLink.validity.valid;
  
    if (isFormValid) {
        newPictureButton.removeAttribute('disabled');
        newPictureButton.classList.add('pop-up__button-edit_active');
    } else {
        newPictureButton.setAttribute('disabled', true);
        newPictureButton.classList.remove('pop-up__button-edit_active');
    }
  };
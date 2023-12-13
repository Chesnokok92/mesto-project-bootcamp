const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popup = document.querySelector('.profile-popup');
const popupPictureNew = document.querySelector('.pictureNew-popup');
const popupPictureFull = document.querySelector('.pictureFull-popup');
const popupPictureOverlay = document.querySelector('.pop-up__picture');
const popupPicture = document.getElementById('pictureAddPop');
const openPopupButtons = document.getElementById('profile');
const openPopupAddPicture = document.getElementById('pictureAdd');
const nameText = document.querySelector('.profile__name').textContent;
const infoText = document.querySelector('.profile__about').textContent;
const inputTitle = document.getElementById('inputTitle').textContent;
const inputLinkPicture = document.getElementById('inputLinkPicture').textContent;
const nameInput = document.querySelector('#inputName');
const jobInput = document.querySelector('#inputInfo');
const formElement = document.querySelector('.pop-up');
// const formInputName = document.querySelector('.pop-up_name')
// const formInputInfo = document.getElementById('inputInfo')
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const newPictureButton = document.getElementById('newPictureButtonAdd');
const pictures = document.querySelector('elements');
const newName = document.getElementById('inputTitle').value;
const newLink = document.getElementById('inputLinkPicture').value;
const fullPic = document.getElementById('pictureFull');
const popupErrorsName = document.querySelector('.pop-up__errors_name');
const popupErrorsInfo = document.querySelector('.pop-up__errors_info');

//функция закрытия попап
const closePopup = function () {
    popup.classList.remove('pop-up__all_active');
    console.log('Popup closed!');
};

//функция закрытия попап добавления карточки
const closePopupNew = function () {
    popupPictureNew.classList.remove('pop-up__all_active');
    console.log('Popup closedNew!');
};
//функция закрытия попап большой фотографии
const closePopupFull = function () {
    popupPictureFull.classList.remove('pop-up__all_active');
    console.log('Popup closedFull!');
};

popup.addEventListener('click', function (event) {
    if (event.target.classList.contains('pop-up__button-close')) {
        event.preventDefault();
        closePopup();
    }
});
popupPictureNew.addEventListener('click', function (event) {
    if (event.target.classList.contains('pop-up__button-close_new')) {
        event.preventDefault();
        closePopupNew();
    }
});
popupPictureFull.addEventListener('click', function (event) {
    if (event.target.classList.contains('pop-up__button-close_full')) {
        event.preventDefault();
        closePopupFull();
    }
});

// Закрытие на оверлей 
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
        closePopupNew();
        closePopupFull();
    }
});

popupPictureOverlay.addEventListener('click', (e) => {
    if (e.target === popupPictureOverlay) {
        closePopupFull();
    }
});

// Закрытие на esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
        closePopupNew();
        closePopupFull();
    }
});

//Открытие попап
const openPopup = function () {
    popup.classList.add('pop-up__all_active');
};
//Открытие попап новой карточки
const openPopupNew = function () {
    popupPictureNew.classList.add('pop-up__all_active');
};
//Открытие попап большого фото
const openPopupFull = function () {
    popupPictureFull.classList.add('pop-up__all_active');
};

//рендер карточек
const cardsInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});

function render() {
    cardsInfo.forEach(renderCard);
}
render();
function addPicture() {
}
function renderCard({ name, link }) {
    const placeElement = cardsTemplate
        .querySelector(".elements__element")
        .cloneNode(true);
    placeElement.querySelector(".elements__text").textContent = name;
    placeElement.querySelector(".elements__photo").src = link;
    placeElement.querySelector(".elements__photo").alt = name;

    cardsContainer.prepend(placeElement);
}

newPictureButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newName = document.getElementById('inputTitle').value;
    const newLink = document.getElementById('inputLinkPicture').value;

    const createBlock = document.createElement('article');
    createBlock.className = 'elements__element';
    createBlock.insertAdjacentHTML('beforeend', `
    <button class="elements__thrash" type="submit"></button>
                    <button class="elements__button" type="submit">
                        <img class="elements__photo"  src="${newLink}"  alt="${newName}" />
                    </button>
                    <div class="elements__info">
                    <h2 class="elements__text">${newName}</h2>
                        <button class="elements__like" type="submit">
                        </button>
                    </div>

  `);
    cardsContainer.insertAdjacentElement('afterbegin', createBlock,);
    pictureAddPop.classList.remove('pop-up__all_active');
});

//открытие попап изменения данных
openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('pop-up__all_active');
    document.getElementById('inputName').value = nameText;
    document.getElementById('inputInfo').value = infoText;
});

//открытие попап добавления карточки
openPopupAddPicture.addEventListener('click', (e) => {
    e.preventDefault();
    pictureAddPop.classList.add('pop-up__all_active');
    document.getElementById('inputTitle').value = inputTitle;
    document.getElementById('inputLinkPicture').value = inputLinkPicture;
});


function handleFormSubmit(evt) {
    evt.preventDefault();
    const newName = document.getElementById("inputName").value;
    const newInfo = document.getElementById("inputInfo").value;
    const updateName = document.querySelector('.profile__name');
    const updateInfo = document.querySelector('.profile__about');
    updateName.textContent = newName;
    updateInfo.textContent = newInfo;
    closePopup()
};
formElement.addEventListener('submit', handleFormSubmit);

// Функция лайка
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('elements__like')) {
        event.target.classList.toggle('elements__like_active');
    }
});

// Функция удаления карточки (корзина)
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('elements__thrash')) {
        const listItem = event.target.closest('.elements__element');
        listItem.remove();
    }
});

//Открытие фото в большом окне
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('elements__photo')) {
        const popPic = document.getElementById('picO');
        fullPic.classList.add('pop-up__all_active');
        const imageName = event.target.closest('.elements__element').querySelector(".elements__text").textContent;
        const imageUrl = event.target.src;

        const picUrlPop = document.createElement('img');
        picUrlPop.className = 'pop-up__picOpen';
        picUrlPop.src = imageUrl;

        const picTextPop = document.createElement('h2');
        picTextPop.className = 'pop-up__picText';
        picTextPop.textContent = imageName;

        console.log(imageName);
        console.log(imageUrl);
        console.log(picUrlPop);

        popPic.replaceWith(picUrlPop);
        picText.replaceWith(picTextPop);
    }
});

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
// const newPictureButtonAdd = document.getElementById('newPictureButtonAdd');
const editButtonNameAndInfo = document.getElementById('buttonEdit');

//проверка кнопки обновления инфо профиля
const toggleButtonStateNameAndInfo = () => {
    // Проверка валидности всех полей формы
    const isFormValid = formInputName.validity.valid && formInputInfo.validity.valid;
  
    // Если форма валидна, активируем кнопку, иначе деактивируем
    if (isFormValid) {
        editButtonNameAndInfo.removeAttribute('disabled');
        editButtonNameAndInfo.classList.add('pop-up__button-edit_active'); // Предполагается наличие стиля для активной кнопки
    } else {
        editButtonNameAndInfo.setAttribute('disabled', true);
        editButtonNameAndInfo.classList.remove('pop-up__button-edit_active');
    }
  };
  //проверка кнопки новой карточки с картинкой
  const toggleButtonStateNewPictures = () => {
    // Проверка валидности всех полей формы
    const isFormValid = forminputTitle.validity.valid && forminputLink.validity.valid;
  
    // Если форма валидна, активируем кнопку, иначе деактивируем
    if (isFormValid) {
        newPictureButton.removeAttribute('disabled');
        newPictureButton.classList.add('pop-up__button-edit_active'); // Предполагается наличие стиля для активной кнопки
    } else {
        newPictureButton.setAttribute('disabled', true);
        newPictureButton.classList.remove('pop-up__button-edit_active');
    }
  };

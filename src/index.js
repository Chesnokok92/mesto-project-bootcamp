import '../pages/index.css'; // добавьте импорт главного файла стилей 


import arhiz from '../images/arkhyz.jpg';
import chelyabinskayaOblast from '../images/chelyabinsk-oblast.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamcatka from '../images/kamchatka.jpg';
import holmogorsyRayon from '../images/kholmogorsky-rayon.jpg';
import baikal from '../images/baikal.jpg';



const initialCards = [
    {
        name: 'Архыз',
        link: arhiz
    },
    {
        name: 'Челябинская область',
        link: chelyabinskayaOblast
    },
    {
        name: 'Иваново',
        link: ivanovo
    },
    {
        name: 'Камчатка',
        link: kamcatka
    },
    {
        name: 'Холмогорский район',
        link: holmogorsyRayon
    },
    {
        name: 'Байкал',
        link: baikal
    }
];


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



const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

const popupPictureFull = document.querySelector('.pictureFull-popup');
const popupPictureOverlay = document.querySelector('.pop-up__picture');
const popupPicture = document.getElementById('pictureAddPop');
const nameText = document.querySelector('.profile__name').textContent;
const infoText = document.querySelector('.profile__about').textContent;
const inputTitle = document.getElementById('inputTitle').textContent;
const inputLinkPicture = document.getElementById('inputLinkPicture').textContent;
const nameInput = document.querySelector('#inputName');
const jobInput = document.querySelector('#inputInfo');
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const pictures = document.querySelector('elements');
const popupErrorsName = document.querySelector('.pop-up__errors_name');
const popupErrorsInfo = document.querySelector('.pop-up__errors_info');
const newName = document.getElementById('inputTitle').value;
const newLink = document.getElementById('inputLinkPicture').value;
const fullPic = document.getElementById('pictureFull');
const popup = document.querySelector('.profile-popup');
const openPopupAddPicture = document.getElementById('pictureAdd');
const popupPictureNew = document.querySelector('.pictureNew-popup');
const openPopupButtons = document.getElementById('profile');

import {formErrorLink} from '../components/validate.js';

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

        popPic.innerHTML = '';
        popPic.appendChild(picUrlPop);
        popPic.appendChild(picTextPop);

    }
});


//Открытие попап
const openPopup = function () {
    popup.classList.add('pop-up__all_active');
};
export {openPopup};
//Открытие попап новой карточки
const openPopupNew = function () {
    popupPictureNew.classList.add('pop-up__all_active');
};
//Открытие попап большого фото
const openPopupFull = function () {
    popupPictureFull.classList.add('pop-up__all_active');
};


//открытие попап добавления карточки
openPopupAddPicture.addEventListener('click', (e) => {
    e.preventDefault();
    pictureAddPop.classList.add('pop-up__all_active');
    document.getElementById('inputTitle').value = inputTitle;
    document.getElementById('inputLinkPicture').value = inputLinkPicture;
});

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

//функция закрытия попап
const closePopup = function () {
    popup.classList.remove('pop-up__all_active');
    formErrorLink.classList.remove('pop-up__errors_active');
    console.log('Popup closed!');
};

export {closePopup};

//функция закрытия попап добавления карточки
const closePopupNew = function () {
    popupPictureNew.classList.remove('pop-up__all_active');
    console.log('Popup closedNew!');
};

//открытие попап изменения данных
openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('pop-up__all_active');
    document.getElementById('inputName').value = nameText;
    document.getElementById('inputInfo').value = infoText;
});

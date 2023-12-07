const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10

import arhiz from '../images/arkhyz.jpg';
import chelyabinskayaOblast from '../images/chelyabinsk-oblast.jpg';
import ivanovo from '../images/ivanovo.jpg';
import kamcatka from '../images/kamchatka.jpg';
import holmogorsyRayon from '../images/kholmogorsky-rayon.jpg';
import baikal from '../images/baikal.jpg';

import '../pages/index.css'; 



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

const popup = document.querySelector('.profile-popup');
const popupPicture = document.getElementById('pictureAddPop');
const openPopupButtons = document.getElementById('profile');
const closePopupButtons = document.querySelector('.pop-up__button-close');
const openPopupAddPicture = document.getElementById('pictureAdd');
const nameText = document.querySelector('.profile__name').textContent;
const infoText = document.querySelector('.profile__about').textContent;
const inputTitle = document.getElementById('inputTitle').textContent;
const inputLinkPicture = document.getElementById('inputLinkPicture').textContent;
const nameInput = document.querySelector('#inputName');
const jobInput = document.querySelector('#inputInfo');
const formElement = document.querySelector('.pop-up');
const formInput = formElement.querySelector('.pop-up__input')
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const newPictureButton = document.getElementById('newPicture');
const pictures = document.querySelector('elements');
const newName = document.getElementById('inputTitle').value;
const newLink = document.getElementById('inputLinkPicture').value;
const fullPic = document.getElementById('pictureFull');
const popupErrors = popup.querySelector('.pop-up__errors');

const closePopup = function () {
    popup.classList.remove('pop-up__all_active');
};


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closePopup()
    }
});

const openPopup = function () {
    popup.classList.add('pop-up__all_active');
};

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


openPopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('pop-up__all_active');
    document.getElementById('inputName').value = nameText;
    document.getElementById('inputInfo').value = infoText;
});

closePopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    closePopup()
});

popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
        closePopup()
    }
  });

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
};
formElement.addEventListener('submit', handleFormSubmit);


const likeButton = document.querySelectorAll('.elements__like');
likeButton.forEach(likeButton => {
    likeButton.addEventListener('click', () => likeButton.classList.toggle('elements__like_active'));
});

const deletePic = document.querySelectorAll('.elements__thrash');
deletePic.forEach(deletePic => {
    deletePic.addEventListener('click', function () {
        const listItem = deletePic.closest('.elements__element');
        listItem.remove();
    });
});
const newPic = document.querySelectorAll('elements__photo');
const picF = document.querySelectorAll('.elements__button');
const picText = document.getElementById('picText');
picF.forEach(picF => {
    picF.addEventListener('click', function () {
        const popPic = document.getElementById('picO');
        fullPic.classList.add('pop-up__all_active');
        const imageName = document.querySelector(".elements__text").textContent;
        const imageUrl = document.querySelector(".elements__photo").src;

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
    });
});
// поверхностное копирование попробовать


// Функция, которая добавляет класс с ошибкой
const showInputError = (popup) => {
    popupErrors.classList.add('pop-up__errors_active');
  };
  
  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (popup) => {
    popupErrors.classList.remove('pop-up__errors_active');
  };
  
  // Функция, которая проверяет валидность поля
  const isValid = () => {
    if (!formInput.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError();
    } else {
      // Если проходит, скроем
      hideInputError();
    }
  };
  
  // Вызовем функцию isValid на каждый ввод символа
  formInput.addEventListener('input', isValid); 
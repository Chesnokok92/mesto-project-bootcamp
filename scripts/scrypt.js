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

const popup = document.querySelector('.pop-up__all');
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
const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const newPictureButton = document.getElementById('newPicture');
const pictures = document.querySelector('elements');
const newName = document.getElementById('inputTitle').value;
const newLink = document.getElementById('inputLinkPicture').value;
const fullPic = document.getElementById('pictureFull');
const picF = document.querySelector('pop-up__fullpicture');

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

    cardsContainer.prepend(placeElement);
}

newPictureButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newName = document.getElementById('inputTitle').value;
    const newLink = document.getElementById('inputLinkPicture').value;

    const createBlock = document.createElement('article');
    createBlock.className = 'elements__element';
    createBlock.insertAdjacentHTML('beforeend', `
    <img class="elements__photo" src="${newLink}" alt=" Фото" />
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
})

closePopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('pop-up__all_active');
})

openPopupAddPicture.addEventListener('click', (e) => {
    e.preventDefault();
    pictureAddPop.classList.add('pop-up__all_active');
    document.getElementById('inputTitle').value = inputTitle;
    document.getElementById('inputLinkPicture').value = inputLinkPicture;
})


function handleFormSubmit(evt) {
    evt.preventDefault();
    const newName = document.getElementById("inputName").value;
    const newInfo = document.getElementById("inputInfo").value;
    let updateName = document.querySelector('.profile__name');
    let updateInfo = document.querySelector('.profile__about');
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

function openfullpicture() {
    fullPic.classList.add('pop-up__all_active');
    
   // document.getElementById("picO").innerHTML = "<img src='https://img.gazeta.ru/files3/486/17459486/russss-pic_32ratio_1200x800-1200x800-29042.jpg' />";
};

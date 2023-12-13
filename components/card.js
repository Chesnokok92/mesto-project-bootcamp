const cardsContainer = document.querySelector(".elements");
const cardsTemplate = document.querySelector("#card__template").content;
const newPictureButton = document.getElementById('newPictureButtonAdd');






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


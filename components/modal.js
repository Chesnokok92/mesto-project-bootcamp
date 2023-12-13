const formElement = document.querySelector('.pop-up');

import {closePopup} from './index.js'

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
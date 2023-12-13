
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
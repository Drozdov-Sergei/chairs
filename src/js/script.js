const locationClick = document.querySelector('.header__location');
const locationTitle = document.querySelector('.header__location-title');
const locationList = document.querySelector('.header__location-list');
const locationItem = document.querySelectorAll('.header__location-item');
const locationImg = document.querySelector('.header__location-img');

locationClick.addEventListener ('click', () => {
    if (locationList.classList.contains('header__location-list--active')) {
        locationList.classList.remove('header__location-list--active');
        locationImg.style.transform = 'rotate(0deg)';
    } else {
        locationList.classList.add('header__location-list--active');
        locationImg.style.transform = 'rotate(180deg)';
    }
});

locationItem.forEach ((Item, i) => {
    Item.addEventListener('click', () => {
        locationTitle.textContent = Item.textContent;
});
});
//регион хедера
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

//карты
// let center = [59.949873623587585, 30.316037580080657];

// function init() {
//   let map = new ymaps.Map('map-element', {
//     center: center,
//     zoom: 15
//   });

//   let playsmark = new ymaps.Placemark(center, {}, {
//     iconLayout: 'default#image',
//     iconImageHref: '',
//     iconImageSize: [],
//     iconImageOffset: []
//   });

// map.geoObjects.add(playsmark);

// }

// ymaps.ready(init);




//   //map.controls.remove('geolocationControl'); // удаляем геолокацию
//   map.controls.remove('searchControl'); // удаляем поиск
//   map.controls.remove('trafficControl'); // удаляем контроль трафика
//   map.controls.remove('typeSelector'); // удаляем тип
//   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
//   map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

//mobile menu

const headerMobile = document.querySelector('.header__mobile'),
    burger = document.querySelector('.header__burger'),
    cross = document.querySelector('.header__cross'),
    body = document.querySelector('body');

burger.addEventListener('click', () => {
    headerMobile.classList.toggle('active');
    burger.style.display = 'none';
    cross.style.display = 'block';
    body.classList.add('noscroll');
});

cross.addEventListener('click', () => {
    headerMobile.classList.toggle('active');
    burger.style.display = 'block';
    cross.style.display = 'none';
    body.classList.remove('noscroll');
});


//modal
const modal = document.querySelector('.modal'),
    modalButtons = document.querySelectorAll('.button__modal')

modalButtons.forEach((item) => {
    item.addEventListener('click', () =>{
        modal.classList.add('active');
        body.classList.add('noscroll');
    })
});

modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    
    if (!isModal) {
        modal.classList.remove('active');
        body.classList.remove('noscroll');
    }
});

//slider
const swiper = new Swiper('.slider', {
    loop: true,
    pagination: {
      el: '.slider__pagination',
    },
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
  });

  //iform send
// const form = document.querySelector('.form_elements');

// const sendForm = (data) => {
//     return fetch('mail.php', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     }).then(res => res.json());
// };

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const dataForm = new FormData(form);
//     const user = {};

//     dataForm.forEach((val, key) => {
//         user[key] = val;
//     });

//     sendForm(user).then(data => {
//         console.log("Письмо отправилось!");
//     });

//     form.reset();

// });
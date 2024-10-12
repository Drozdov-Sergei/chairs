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
// let flag = 0;

// window.addEventListener('scroll', function () {
//     let scrollY = window.scrollY;
//     let mapOffset = this.document.querySelector('.map').offsetTop;

//     if ((scrollY >= mapOffset - 500) && (flag == 0)) {
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

//flag = 1;
//    }
//});




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

// mask for form
const form = document.querySelector('.form__elements');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask ('+7 (999) 999-99-99');
inputMask.mask(telSelector);

//validation
const validation = new JustValidate('.form__elements');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Количество символов меньше 2!',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Количество символов больше 30!',    
    },
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
    }
  ])

  .addField('#telephone', [
    {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон!',
    },
    {
        rule: 'function',
        validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
        },
        errorMessage: 'Введите корректный номер телефона!',
    }
  ])

  .addField('#check', [
    {
    rule: 'required',
    errorMessage: 'Поставь галочку блядь!',
    }
])
  ;//.onSuccess((e) => {
    //if (document.querySelector('#check').checked) {
    // const sendForm = (data) => {
//     return fetch('mail.php', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     }).then(res => res.json());
// };
//     const dataForm = new FormData(e.target);
//     const user = {};

//     dataForm.forEach((val, key) => {
//         user[key] = val;
//     });

//     sendForm(user).then(data => {
//         console.log("Письмо отправилось!");
//     });

//     e.target.reset();
//}});


//advantages

let advantages = document.querySelectorAll('.advanteges__item'),
    circle = document.querySelectorAll('.advantages__wrapper-circle')

advantages.forEach((key, i) => {
    key.addEventListener('mouseout', (event) => {
        let currentimg = circle[i].querySelectorAll('img')
            advantages[i].classList.remove('advantages__item--active')
            currentimg[1].classList.remove('advantages__wrapper-circle--active')
            currentimg[1].classList.add('advantages__wrapper-circle--notactive')
            currentimg[0].classList.add('advantages__wrapper-circle--active')
            currentimg[0].classList.remove('advantages__wrapper-circle--notactive')
        });
    key.addEventListener('mouseover', (event) => {
        let currentimg = circle[i].querySelectorAll('img')
            advantages[i].classList.add('advantages__item--active')
            currentimg[1].classList.add('advantages__wrapper-circle--active')
            currentimg[1].classList.remove('advantages__wrapper-circle--notactive')
            currentimg[0].classList.remove('advantages__wrapper-circle--active')
            currentimg[0].classList.add('advantages__wrapper-circle--notactive')
    });
});


//accordeon

let accordeon = document.querySelector('.facts__accordeon'),
        item = document.querySelectorAll('.facts__item'),
        indicator = document.querySelectorAll('.facts__indication'),
        answer = document.querySelectorAll('.facts__answer');

accordeon.addEventListener ('click', (e) => {
    const target = e.target.closest('.facts__item');
    if (target) {
    item.forEach((key, i) => {
        if (key === target) {
            if(key.classList.contains('facts__item--active')){
                item[i].classList.remove('facts__item--active');
                indicator[i].classList.remove('facts__indication--active');
                answer[i].classList.remove('facts__answer--active');
            } else {
                item[i].classList.add('facts__item--active');
                indicator[i].classList.add('facts__indication--active');
                answer[i].classList.add('facts__answer--active');}
        } else {
            item[i].classList.remove('facts__item--active');
            indicator[i].classList.remove('facts__indication--active');
            answer[i].classList.remove('facts__answer--active');
        }
    });
    }
});
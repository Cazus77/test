
/**Таймер */

let deadline = '2020-07-09';

function getTimeRemaining(deadlinee) {
  let t = Date.parse(deadline) - Date.parse(new Date());
  let seconds = addZero(Math.floor((t / 1000) % 60));
  let minutes = addZero(Math.floor((t / 1000 / 60) % 60));
  let hours = addZero(Math.floor(t / (1000 * 60 * 60)));  

  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function setClock(id, deadline) {
  let timer = document.getElementById(id);
  let hours = timer.querySelector('.timer__block--clock');
  let minutes = timer.querySelector('.timer__block--minutes');
  let seconds = timer.querySelector('.timer__block--seconds');
  let timeInterval = setInterval(updateClock, 1000);


  function updateClock() {
    let t = getTimeRemaining(deadline);
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}
setClock('timer', deadline);
setClock('timers', deadline);


/**Форма */

/**Валидация формы */


let form = document.querySelector('.form')
let btnForm = document.querySelector('.button--form')
let formState = document.querySelectorAll('.form__item--state')
let formName = document.querySelector('.form__input--name')
let formPhone = document.querySelector('.form__item--phone')
let fields = document.querySelectorAll('.field')

form.addEventListener('submit', function (event) {

  let error = false;

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === '') {
      fields[i].classList.add('error')
      error = true;
    } else {
      fields[i].classList.remove('error');
    } if (error) {
      event.preventDefault()
    }
  }
})


// /**Слайдер */

if (window.innerWidth < 400) {

  

  
  let mediaQuery = window.matchMedia('(max-width: 500px)');

  if (mediaQuery.matches) { }
  window.onload = function () { }
  /* Индекс слайда по умолчанию */
  let slideIndex = 1;
  showSlides(slideIndex);

  /* Устанавливает текущий слайд */
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  /* Основная функция слайдера */
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__img");
    let dots = document.getElementsByClassName("slider__dots-item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  

}



// let images = document.querySelectorAll('.slider__img');
// let dots = document.querySelectorAll('.slider__dots-item')
// let i = 0;
// console.log(images);
// console.log(dots);


// dots.onclick = function () {
//   images[i].classList.remove('show');
//   i--;

//   if (i < 0) {
//     i = images.length - 1;
//   }

//   images[i].classList.add('show');
// }

// btnNext.onclick = function () {
//   images[i].classList.remove('show');
//   i++;

//   if (i >= images.length) {
//     i = 0;
//   }

//   images[i].classList.add('show');



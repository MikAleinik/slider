const upButton = document.querySelector('.button-up');
const downButton = document.querySelector('.button-down');
const sideSlide = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const countSlide = mainSlide.querySelectorAll('.main-slide__item').length;
const container = document.querySelector('.slider-container');

let thisTransition = true;
let indexMainSlide = 0;
let indexSideSlide = 0;
let indexMainSlideTop = -200;
let indexSideSlideTop = -200;

sideSlide.style.top = `${indexSideSlideTop}vh`;
mainSlide.style.top = `${indexMainSlideTop}vh`;

upButton.addEventListener('click', () => {
  if (thisTransition) {
    changeSlide('up');
  }
});

downButton.addEventListener('click', () => {
  if (thisTransition) {
    changeSlide('down');
  }
});

mainSlide.addEventListener("transitionend", endTransitionSlide, false);

container.addEventListener('wheel', (event) => {
  if (thisTransition) {
    event = event || window.event;
    var y = event.deltaY || event.detail || event.wheelDelta;
    if (event.target.className === 'item__foto item__main-foto') {
      scrollFoto(y, event.target);
    } else {
      if (y < 0) {
        changeSlide('up');
      } else {
        changeSlide('down');
      }
    }
  }
});

function endTransitionSlide() {
  thisTransition = true;
}

function changeSlide(direction) {
  const screenHeight = container.clientHeight;
  thisTransition = false;
  if (direction === 'up') {
    indexMainSlide++;
    replaceSliderElementUp(document.getElementById('mainSlide'));
    indexMainSlideTop += 100;
    mainSlide.style.top = `${indexMainSlideTop}vh`;
    mainSlide.style.transform = `translateY(${-indexMainSlide * screenHeight}px)`;

    indexSideSlide--;
    replaceSliderElementDown(document.getElementById('sideSlide'));
    indexSideSlideTop -= 100;
    sideSlide.style.top = `${indexSideSlideTop}vh`;
    sideSlide.style.transform = `translateY(${-indexSideSlide * screenHeight}px)`;
  } else {
    indexMainSlide--
    replaceSliderElementDown(document.getElementById('mainSlide'));
    indexMainSlideTop -= 100;
    mainSlide.style.top = `${indexMainSlideTop}vh`;
    mainSlide.style.transform = `translateY(${-indexMainSlide * screenHeight}px)`;

    indexSideSlide++
    replaceSliderElementUp(document.getElementById('sideSlide'));
    indexSideSlideTop += 100;
    sideSlide.style.top = `${indexSideSlideTop}vh`;
    sideSlide.style.transform = `translateY(${-indexSideSlide * screenHeight}px)`;
  }
}

function replaceSliderElementDown(parent) {
  let firstSlide = parent.firstElementChild;
  let slide = parent.lastElementChild;
  parent.insertBefore(slide, firstSlide);
}

function replaceSliderElementUp(parent) {
  let slide = parent.firstElementChild;
  parent.appendChild(slide);
}
function scrollFoto(y, element) {
  var gallery = element.parentNode;
  var galleryWidth = gallery.clientWidth;
  var counter = gallery.previousElementSibling;

  var leftHiddenFoto = gallery.firstElementChild;
  var leftFoto = leftHiddenFoto.nextElementSibling;
  var mainFoto = leftFoto.nextElementSibling;
  var rightFoto = mainFoto.nextElementSibling;
  var rightHiddenFoto = rightFoto.nextElementSibling;

  var number;

  var filePath = './assets/jpg/Gallery/' + counter.previousElementSibling.value + "/";

  if(y < 0){
    //влево
    counter.value++;
    if((Number(counter.value) + 2) < Number(counter.max)){
      number = Number(counter.value) + 2;
    } else {
      number = Number(counter.value) + 2 - Number(counter.max);
      if(Number(counter.value) === Number(counter.max)){
        counter.value = counter.min;
      }
    }
    leftHiddenFoto.remove();
    leftFoto.classList.remove('item__left-secondary-foto');
    leftFoto.classList.add('item__left-hidden-foto');
    mainFoto.classList.remove('item__main-foto');
    mainFoto.classList.add('item__left-secondary-foto');
    rightFoto.classList.remove('item__right-secondary-foto');
    rightFoto.classList.add('item__main-foto');
    rightHiddenFoto.classList.remove('item__right-hidden-foto');
    rightHiddenFoto.classList.add('item__right-secondary-foto');
    rightHiddenFoto.insertAdjacentHTML("afterend", "<img class='item__foto item__right-hidden-foto' src='" + filePath + number + ".jpg' alt='Foto'>");
  } else {
    //вправо
    counter.value--;
    if((Number(counter.value) - 2) > Number(counter.min)){
      number = Number(counter.value) - 2;
    } else {
      number = Number(counter.value) - 2 + Number(counter.max);
      if(Number(counter.value) === Number(counter.min)){
        counter.value = counter.max;
      }
    }
    rightHiddenFoto.remove();
    rightFoto.classList.remove('item__right-secondary-foto');
    rightFoto.classList.add('item__right-hidden-foto');
    mainFoto.classList.remove('item__main-foto');
    mainFoto.classList.add('item__right-secondary-foto');
    leftFoto.classList.remove('item__left-secondary-foto');
    leftFoto.classList.add('item__main-foto');
    leftHiddenFoto.classList.remove('item__left-hidden-foto');
    leftHiddenFoto.classList.add('item__left-secondary-foto');
    leftHiddenFoto.insertAdjacentHTML("beforebegin", "<img class='item__foto item__left-hidden-foto' src='" + filePath + number + ".jpg' alt='Foto'>");
  }
}
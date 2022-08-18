const random__img = document.getElementsByClassName('random__img')[0];
const images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg'];
const imageNo = Math.floor( Math.random() * images.length)
random__img.src = images[imageNo];
var i = 0; //start point
var images = [];
var time = 4000;

//image lists
images[0] = 'img/IMG_1270.jpg';
images[1] = 'img/IMG_1268.jpg';
images[2] = 'img/IMG_1271.jpg';
images[3] = 'img/IMG_1272.jpg';
images[4] = 'img/family.gif';

//change image
function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

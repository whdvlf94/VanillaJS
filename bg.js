const body = document.querySelector("body");
const IMG_NUMBER = 4;

function handleImgLoad() {
  console.log("finished loading");
}


function paintImage(imgNumber) {
  //image = document.createElement("img")로 사용할 수도 있다.
  const image = new Image();
  //image source의 위치
  image.src = `images/${imgNumber}.jpg`;

  image.classList.add("bgImage")// classList.add를 통해 bgImage
  // body.appendChild(image)
  body.prepend(image);
  // image.addEventListener("loadend",handleImgLoad)

}

function genRandom() {
  //Math 메서드를 이용하여 image 숫자 값 얻기
  const number = Math.ceil(Math.random()*IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();
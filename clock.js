const clockContainer = document.querySelector(".js-clock"); // .은 class 호출
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours}:${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds}`;
      //조건부 삼항연산자로 사용 가능
  
}
function init() {
  // getTime();
  setInterval(getTime,1000);
}

init();
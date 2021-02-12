const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector('.js-greetings');
//querySelectorAll 은 해당 Class 에 존재하는 모든 엘리먼트를 Array 형식으로 가져온다.

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS,text) //localStorage에 item 값 저장
}

function handleSubmit(event) {
  event.preventDefault(); //특정 기능에 대한 이벤트가 발생하지 않도록 설정
  const currentValue =  input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit",handleSubmit)
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN); //form 삭제
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`

}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser)
  }
}
function init() {
 loadName();
}
init();
const toDoForm = document.querySelector(".js-toDoForm"),
<<<<<<< HEAD
<<<<<<< HEAD
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';


let toDos = [];

function deleteToDo(event) {
  //button의 id 값을 호출
  // console.log(event.target.parentNode); 

  const btn = event.target
  const li = btn.parentNode;
  toDoList.removeChild(li); //button 클릭 시 삭제
  const cleanToDos = toDos.filter(function (toDo) {
    //li.id 는 string 이므로 int로 변환해준다.
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  console.log(toDos);
  saveToDos();
}

      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];


//toDolist를 localStorage에 저장하기 위함
function saveToDos() {
  //JS는 localStorage에 String 형태로 저장하기 때문에
  //JSON.stringify 형태로 저장
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos))
}

function paintToDo(text) {
  const li = document.createElement("li"); //li 생성
  const delBtn = document.createElement("button"); //button 생성
  const span = document.createElement("span"); //span 생성
  const newId = toDos.length + 1;
  delBtn.innerText = "️️🍕";

  delBtn.addEventListener("click", deleteToDo); // 로고를 클릭할 경우 이벤트 발생
  span.innerText = text;

  //button, span을 li 태그 안에 삽입
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId // li 태그에 대한 id 값 부여
  toDoList.appendChild(li);

  //toDoList 값들을 Array에 저장
  const toDoObj = {
      text: text,
      id: toDos.length + 1
  };
  toDos.push(toDoObj);
  saveToDos();

}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);

    // forEach 문
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text)
    })
    console.log(parsedToDos)
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
  if(loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);

      //forEach 문
      parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text)
      })
      console.log(parsedToDos)
  } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();


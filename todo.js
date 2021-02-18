const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  //button의 id 값을 호출
  // console.log(event.target.parentNode); 

  const btn = event.target
  const li = btn.parentNode; //해당 button의 li 값 호출
  
  //button 클릭 시 삭제
  //HTML상의 삭제. localStorage에는 해당 기록이 지워지지 않은 상태
  //따라서, 새로고침 시 HTML 화면단에 삭제했던 내용이 다시 나타나는 것을 알 수 있다.
  toDoList.removeChild(li); 

  //배열 인자 값을 조건에 따라 걸러내고, Array 형태로 return
  const cleanToDos = toDos.filter(function (toDo) {
    //li.id 는 string 이므로 int로 변환해준다.
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  console.log(toDos);
  saveToDos();
}



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
  span.innerText = text;

  delBtn.addEventListener("click", deleteToDo); // 로고를 클릭할 경우 이벤트 발생

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


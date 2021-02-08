import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// action type 변수 선언
const ADD = "ADD";
const MINUS = "MINUS";

// reducer : data를 조작할 수 있는 유일한 함수, return값은 data(state)
const countModifier = (count = 0, action) => {
  switch (action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange); // data가 변화할때마다 자동 호출

// countStore.dispatch({type:"ADD"});
// 이와 같은 방식으로 dispatch로 action 메시지를 보냄
// action은 객체면서 무조건 type 속성이 있어야함
add.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));

console.log(countStore.getState()); // countStore의 data에 접근

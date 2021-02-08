const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 이후 toDos를 관리하는 많은 함수들을 만들어줘야함
const toDos = [];

const createToDo = (toDo) => {
    const li = document.createElement("li");
    li.innerText = toDo;
    ul.appendChild(li);
};

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
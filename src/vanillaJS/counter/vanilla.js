const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.textContent = count;

const updateText = () => {
  number.textContent = count;
}

const handleAdd = () => {
  count+=1;
  updateText();
};

const handleMinus = () => {
  count-=1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
function onload() {
  var undoButton = document.getElementById("undoButton");
  var addButton = document.getElementById("addButton");
  var subButton = document.getElementById("subButton");
  var redoButton = document.getElementById("redoButton");

  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> undo 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> redo 버튼 : 결과값 3
// -> redo 버튼 : 결과값 1
// -> redo 버튼 : 결과갑 0 -> redo 버튼 비활성화

//============================

const countTxt = document.getElementById("valuebox");
const input = document.getElementById("inputbox");

const MAX_COUNT = 9999999;

let count = 0; //result
let stack = [0]; //undo-redo stack
let stackCursor = 0; //현재 위치

function handleClick(event) {
  switch (event.target.id) {
    case "addButton":
      plus(getInputValue());
      break;
    case "subButton":
      minus(getInputValue());
      break;
    case "undoButton":
      undo();
      break;
    case "redoButton":
      redo();
      break;
    default:
      break;
  }

  initInput();
  updateUi();
}

//module
function plus(value) {
  if (checkInputValue("plus")) {
    count += value;
    stackAdd(count);
  }
}

function minus(value) {
  if (checkInputValue("minus")) {
    count -= value;
    stackAdd(count);
  }
}

//undo, redo
function stackAdd(value) {
  if (redoButton.disabled == false) {
    stack = stack.slice(0, stackCursor + 1); //redo 활성화 중에 puls/minus 하면 cursor 이후 값들 날림
  }
  stack.push(value);
  stackCursor++;
}

function undo() {
  stackCursor--;
  count = stack[stackCursor];
}

function redo() {
  stackCursor++;
  count = stack[stackCursor];
}

//ui
function checkInputValue(type) {
  console.log(type);
  if (isNaN(getInputValue()) || getInputValue() <= 0) {
    alert("1 이상의 숫자를 입력해주세요.");
    return false;
  } else if (type == "plus" && count + getInputValue() > MAX_COUNT) {
    alert(MAX_COUNT + "보다 클 수 없습니다.");
    return false;
  } else if (type == "minus" && count < getInputValue()) {
    alert("0보다 작을 수 없습니다.");
    return false;
  }

  return true;
}

function getInputValue() {
  return Number(input.value);
}

function initInput() {
  input.value = "";
}

function updateUi() {
  countTxt.innerText = count;
  if (count > 0) {
    undoButton.disabled = false;
  } else {
    undoButton.disabled = true;
  }

  if (stackCursor < stack.length - 1) {
    redoButton.disabled = false;
  } else {
    redoButton.disabled = true;
  }
}

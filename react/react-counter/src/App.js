import "./App.css";
import React, { useState, useEffect, useRef } from "react";

let stack = [0]; //undo-redo stack
let stackCursor = 0; //현재 위치

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [undoFlag, setUndoFlag] = useState(true);
  const [redoFlag, setRedoFlag] = useState(true);

  const inputFocus = useRef(); //특정 DOM 가리킬 때 사용. focus 하거나 색상을 변경하거나 등등.

  const MAX_COUNT = 9999999;
  const CAMMAND = {
    NONE: "none",
    PLUS: "plus",
    MINUS: "minus",
  };
  const { NONE, PLUS, MINUS } = CAMMAND;

  const handleInput = (e) => {
    checkInputValue(NONE, Number(e.target.value));
  };

  const handleClick = (e) => {
    switch (e.target.id) {
      case "addButton":
        plus(input);
        break;
      case "subButton":
        minus(input);
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
  };

  useEffect(() => {
    inputFocus.current.focus();
    initInput();
    updateUi();
  }, [count]);

  //module
  const plus = (value) => {
    if (checkInputValue(PLUS)) {
      stackAdd(count + value);
      setCount(count + value);
    }
  };

  const minus = (value) => {
    if (checkInputValue(MINUS)) {
      stackAdd(count - value);
      setCount(count - value);
    }
  };

  //undo, redo
  const stackAdd = (value) => {
    if (redoFlag == false) {
      stack = stack.slice(0, stackCursor + 1); //redo 활성화 중에 puls/minus 하면 cursor 이후 값들 날림
    }

    stack.push(value);
    stackCursor++;
  };

  const undo = () => {
    stackCursor--;
    setCount(stack[stackCursor]);
  };

  const redo = () => {
    stackCursor++;
    setCount(stack[stackCursor]);
  };

  //ui
  const checkInputValue = (type, value) => {
    if (type == NONE && (isNaN(value) || value <= 0)) {
      alert("1 이상의 숫자를 입력해주세요.");
      initInput();
      return false;
    } else if (type == PLUS && count + value > MAX_COUNT) {
      alert(MAX_COUNT + "보다 클 수 없습니다.");
      return false;
    } else if (type == MINUS && count < value) {
      alert("0보다 작을 수 없습니다.");
      return false;
    }

    setInput(value);
    return true;
  };

  const initInput = () => {
    setInput("");
  };

  const updateUi = () => {
    if (count > 0) {
      setUndoFlag(false);
    } else {
      setUndoFlag(true);
    }

    if (stackCursor < stack.length - 1) {
      setRedoFlag(false);
    } else {
      setRedoFlag(true);
    }
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {count}
      </div>
      <input
        id="inputbox"
        className="input"
        onChange={handleInput}
        ref={inputFocus}
        value={input || ""} //value에 state 설정 시 오류 해결
      />
      <div className="btnGroup">
        <button
          id="undoButton"
          className="btn"
          onClick={handleClick}
          disabled={undoFlag}
        >
          Undo
        </button>
        <button id="addButton" className="btn" onClick={handleClick}>
          +
        </button>
        <button id="subButton" className="btn" onClick={handleClick}>
          -
        </button>
        <button
          id="redoButton"
          className="btn"
          onClick={handleClick}
          disabled={redoFlag}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;

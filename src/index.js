let curNum1 = "";
let curNum2 = "";
let curOperand = "";
const histories = [];

function drawScreen(value) {
  document.getElementsByClassName("calc__display")[0].innerHTML = value;
}

// value = string
function clickNum(value) {
  if (curOperand === ""){
    curNum1 += value;
    drawScreen(curNum1);
  } else {
    curNum2 += value;
    drawScreen(curNum2);
  }
}

function clickOperand(value) {
  curOperand = value;
}

function reset(){
  curNum1 = "";
  curNum2 = "";
  curOperand = "";
  drawScreen("");
}

function clickEqual() {
  if (curNum1 === "" || curNum2 === "") return;
  let result;
  switch(curOperand) {
    case '+':
      result = Number(curNum1) + Number(curNum2);
      break;
    case '-':
      result = Number(curNum1) - Number(curNum2);
      break;
    case '×':
      result = Number(curNum1) * Number(curNum2);
      break;
    case '÷':
      if (curNum2 === "0") {
        drawScreen("error");
        reset();
        return;
      }
      result = Number(curNum1) / Number(curNum2);
      break;
    default:
      break;
  }
  histories.push(`${curNum1} ${curOperand} ${curNum2} = ${result}`);
  curNum2 = "";
  curOperand = "";
  curNum1 = String(result);
  drawScreen(curNum1);
  drawHistories();
}


function drawHistories() {
  document.getElementsByClassName("history__table")[0].innerHTML = histories.reduce((acc=[], e) => acc + `<tr><td>${e}</td></tr>`);
}
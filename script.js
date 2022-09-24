document.getElementById("ten").onclick = function(){
  reset();

  let userInput = Number(document.getElementById("input").value);
  let percent10 = userInput / 100;
  let result10 = Math.round(userInput + (percent10 * 10));

  tip.textContent += Math.round(percent10 * 10);
  total.textContent += result10;
}

document.getElementById("fifteen").onclick = function(){
  reset();
  
  let userInput = Number(document.getElementById("input").value);
  let percent15 = userInput / 100;
  let result15 = Math.round(userInput + (percent15 * 15));
  
  tip.textContent += Math.round(percent15 * 15);
  total.textContent += result15;
}

document.getElementById("twentyFive").onclick = function(){
  reset();

  let userInput = Number(document.getElementById("input").value);
  let percent25 = userInput / 100;
  let result25 = Math.round(userInput + (percent25 * 25));

  tip.textContent += Math.round(percent25 * 25);
  total.textContent += result25;
}

document.getElementById("thirty").onclick = function(){
  reset();

  let userInput = Number(document.getElementById("input").value);
  let percent30 = userInput / 100;
  let result30 = Math.round(userInput + (percent30 * 30));

  tip.textContent += Math.round(percent30 * 30);
  total.textContent += result30;
}

let tip = document.getElementById("tip");
let oldTip = tip.textContent;

let total = document.getElementById("total");
let oldTotal = total.textContent;

function reset() {
  tip.textContent = oldTip;
  total.textContent = oldTotal;
}
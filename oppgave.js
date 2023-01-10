const runCalc = (num) => {
  num = Number(document.getElementById("num").value);
  bottom = document.getElementById("bottom");
  const numArray = [];

  let idCounter = 0;

  idRemove = 0;
  while (document.getElementById(idRemove)) {
    let div = document.getElementById(idRemove);
    console.log(div);
    div.remove();
    idRemove = idRemove + 1;
  }

  while (num > 1) {
    numArray.push(num);
    const newNum = document.createElement("div");
    document.getElementById("bottom").appendChild(newNum);
    newNum.className = "circle";
    newNum.textContent = num;
    newNum.id = idCounter;
    idCounter += 1;
    if (num % 2 === 0) {
      num = num / 2;
      newNum.style.backgroundColor = "red";
    } else {
      num = num * 3 + 1;
      newNum.style.backgroundColor = "blue";
    }
  }
  numArray.push(1);
  const one = document.createElement("div");
  document.getElementById("bottom").appendChild(one);
  one.className = "circle";
  one.textContent = "1";
  one.id = idCounter;
  one.style.backgroundColor = "red";
  console.log(numArray);
  const totNums = numArray.length - 1;
  document.getElementById("totNums").textContent = totNums;
  document.getElementById("inputNum").textContent = Number(
    document.getElementById("num").value
  );
  let topNum = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > topNum) {
      topNum = numArray[i];
    }
  }
  console.log(topNum);
  document.getElementById("topNum").textContent = topNum;
};

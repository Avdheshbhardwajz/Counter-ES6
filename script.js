let counter = 0;
let statuss = false;
let id;
let value = document.querySelector("h3");

let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let str = document.getElementById("str");

str.addEventListener("click", start);

function start() {
  alert("Started");
 
  if (!statuss) {
    statuss = true;
    id = setInterval(() => {
      counter += 1;
      value.textContent = counter;
    }, 1000);
    str.textContent = "STOP";
  } else {
    statuss = false;
    clearInterval(id);
    str.textContent = "START";
  }
}

decrease.addEventListener("click", () => {
  clearInterval(id);
  statuss = false;
  counter -= 1;
  value.textContent = counter;
  str.textContent = "START";
});

increase.addEventListener("click", () => {
  clearInterval(id);
  statuss = false;
  counter += 1;
  value.textContent = counter;
  str.textContent = "START";
});

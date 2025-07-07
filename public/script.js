// Quotes generating functionality

const quotes = [
  "Do something today that your future self will thank you for.",
  "Small steps every day lead to big results.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is the sum of small efforts repeated daily.",
  "Stay consistent, not perfect.",
  "Dream big. Start small. Act now.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best way to get started is to quit talking and begin doing.",
  "Progress, not perfection.",
  "Focus on being productive instead of busy.",
  "Discipline is choosing between what you want now and what you want most.",
  "It always seems impossible until it's done.",
  "Start where you are. Use what you have. Do what you can.",
  "Make it happen. Shock everyone.",
  "Don’t limit your challenges. Challenge your limits.",
  "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
  "Work hard in silence, let your success be the noise.",
  "One day or day one. You decide.",
  "Strive for progress, not perfection.",
  "You are capable of amazing things.",
  "A year from now you’ll wish you started today.",
  "Stay focused and never give up.",
  "Believe you can and you’re halfway there.",
  "Every accomplishment starts with the decision to try.",
  "Keep going. Everything you need will come to you.",
  "Action is the foundational key to all success.",
  "You don’t have to be extreme, just consistent.",
  "Success is built on discipline and dedication.",
  "Be stronger than your excuses.",
  "Start small, stay consistent, and be patient.",
];

let randomQuote = document.getElementById("randomQuote");
let newQuoteBtn = document.getElementById("newQuoteBtn");

let insertValueFun = () => {
  let value = Math.floor(Math.random() * quotes.length);
  randomQuote.innerText = quotes[value];
};

window.addEventListener("load", () => {
  insertValueFun();
});

newQuoteBtn.addEventListener("click", () => {
  insertValueFun();
});

// Timer functionality

let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let time = 0;
let timeStarter = () => {
  intervalId = setInterval(() => {
    time++;
    timer.innerText = time + "s";

    localStorage.setItem("time", time);
  }, 1000);
};

let check = 1;
startBtn.addEventListener("click", () => {
  if (check === 1) {
    check += 1;
    timeStarter();
    startBtn.innerText = "Resume";
  } else if (check === 2) {
    check += 1;
    clearInterval(intervalId);
    startBtn.innerText = "Reset";
  } else if (check === 3) {
    check = 1;
    clearInterval(intervalId);
    localStorage.removeItem("time");
    time = 0;
    timer.innerText = time + "s";
    startBtn.innerText = "Start";
  }
});

window.addEventListener("load", () => {
  let timeValue = localStorage.getItem("time");
  if (timeValue !== null) {
    timer.innerText = timeValue + "s";
  } else {
    timer.innerText = 0 + "s";
  }
});

// To do functionality

let addBtn = document.getElementById("addBtn");
let inputBox = document.getElementById("inputBox");
let deleteBtn = document.getElementById("deleteBtn");
let allToDoItems = [];
let list = document.getElementById("list");
addBtn.addEventListener("click", () => {
  let inputValue = inputBox.value.trim();
  if (inputValue !== "") {
    let newItem = document.createElement("li");
    newItem.textContent = inputValue;

    list.appendChild(newItem);

    allToDoItems.push(inputValue);

    

    localStorage.setItem("tasks", JSON.stringify(allToDoItems));
    inputBox.value = "";
  }
});

deleteBtn.addEventListener("click", () => {
  let childElement = list.firstElementChild;
  if (childElement) {
    list.removeChild(childElement);

    let myListAll = document.querySelectorAll("#list li");
    let updatedList = [];
    myListAll.forEach((items) => {
      updatedList.push(items.textContent);
    });

    allToDoItems = updatedList;

    localStorage.setItem("tasks", JSON.stringify(allToDoItems));
  }
});

window.addEventListener("load", () => {
  let getAllToDoItems = JSON.parse(localStorage.getItem("tasks"));
  getAllToDoItems.forEach((item) => {
    let newElement = document.createElement("li");
    newElement.textContent = item;
    list.appendChild(newElement);
  });
});


let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let today = new Date();
let day = weekdays[today.getDay()];

let dayElement = document.getElementById("day");
dayElement.textContent = day;

let text = "";

if(day==="Sunday") {
    text = "Welcome!";
}
else if(day==="Monday") {
    text = "Greetings!";
}
else if(day==="Tuesday") {
    text = "Hello!";
}
else if(day==="Wednesday") {
    text = "Hi!";
}
else if(day==="Thursday") {
    text = "Howdy!";
}
else if(day==="Friday") {
    text = "Good Day!";
}
else if(day==="Saturday") {
    text = "Hey!";
}

let textElement = document.getElementById("text");
textElement.textContent = text;

let links = document.querySelectorAll(".menuBar");

function changeLinkColor(link, color) {
  link.style.color = color;
}

let logo = document.querySelector(".menu0");

function changeLogo(logo, newText) {
    logo.textContent = newText;
}

changeLogo(logo, "Automated Theorem Proving");

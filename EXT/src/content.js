const hint = document.getElementById("hint");
console.log(hint);
// const inputField = chrome.getElementsByClassName(".input");
// // inputField.exports
// import inputField from "./app.js";
const copy = require("./app.js");

console.log(copy);

const heldp = {
  heldp: ["help", "held", "hello"],
};

const helo = {
  Helo: ["hello", "Help", "Hell"],
};

const cat = {
  Cat: ["Dog", "Rat", "bat"],
};
// document.getElementById("auto-fill").addEventListener("click", () => {
//   console.log("selected");

//   input: document.querySelector("input"), console.log(input);
// });

if (inputField.value == "heldp") {
  console.log(heldp.heldp);
  inputField.value = heldp.heldp[0];
  // hint.innerHTML += "DOMMM";
}
if (inputField.value == "helo") {
  console.log(helo.Helo);
  inputField.value = helo.Helo[0];

  // hint.innerHTML += "DOMMM";
}
if (inputField.value == "cat") {
  console.log(cat.Cat);
  inputField.value = cat.Cat[0];

  // hint.innerHTML += "DOMMM";
}

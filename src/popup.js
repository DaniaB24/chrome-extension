const hint = document.getElementById("hint");
// hint.addEventListener("click", check);
// check();

document.addEventListener("DOMContentLoaded", function () {
  console.log("start");
  startPopup();
});

function startPopup() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "test", getValue);
  });
  const firstWord = document.getElementById("offer-word1");
  const secondWord = document.getElementById("offer-word2");
  const thirdWord = document.getElementById("offer-word3");
  console.log(firstWord);
  console.log(secondWord);
  console.log(thirdWord);
}

function getValue(res) {
  hint.innerHTML = `
  <button class="offer-word" id="offer-word1">${res.value[0]}</button>
  <button class="offer-word" id="offer-word2">${res.value[1]}</button>
  <button class="offer-word" id="offer-word3">${res.value[2]}</button>
  `;
  // setValue();
}

function setValue() {
  if (firstWord.click) {
    console.log("click");
  }
}
// function createCard(hero) {
// }
// const newContent = oldContent.replace(wrongWord, correctWord);
// console.log(newContent);
// console.log(words);
// firstWord.textContent = words.word1;
// secondWord.textContent = res.value;
// thirdWord.textContent = words.word3;
// console.log(res.value2);
// changeInputValue();

// function check({ target }) {
//   if (target.id == firstWord.id) {
//     console.log(target.id);
//     console.log("true ");
//     // chrome.tabs.sendMessage(tab[0].id, "hiii");
//   }
//   if (target.id == secondWord.id) {
//     console.log(target.id);
//     console.log("true ");
//     // chrome.tabs.sendMessage(tab[0].id, "hiii");
//   }
//   if (target.id == thirdWord.id) {
//     console.log(target.id);
//     console.log("true ");
//     // chrome.tabs.sendMessage(tab[0].id, "hiii");
//   }
// }
// function button() {
//   let params = {
//     active: true,
//     currentWindow: true,
//   };
//   chrome.tabs.query(params, gotTab);
//   function gotTab(tab) {
//     chrome.tabs.sendMessage(tab[0].id, "hiii");
//   }
// }

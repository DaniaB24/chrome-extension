const hint = document.getElementById("hint");
const firstWord = document.getElementById("offer-word1");
const secondWord = document.getElementById("offer-word2");
const thirdWord = document.getElementById("offer-word3");

// hint.addEventListener("click", check);
// check();

document.addEventListener("DOMContentLoaded", function () {
  buttonClicked();
});

function buttonClicked() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "test", setValue);
  });
}

function setValue(res) {
  let words = {
    word1: res.value[0],
    word2: res.value[1],
    word3: res.value[2],
  };
  firstWord.textContent = words.word1;
  secondWord.textContent = words.word2;
  thirdWord.textContent = words.word3;
  // console.log(res.value2);
  // changeInputValue();
}

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

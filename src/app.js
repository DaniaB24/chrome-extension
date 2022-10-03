const dictionary = {
  heldp: ["help", "held", "hello"],
  Helo: ["hello", "Help", "Hell"],
  Cat: ["Dog", "Rat", "bat"],
};
let wrongWord;
let correctWords;
let currentWord;
document.addEventListener("input", (event) => {
  chrome.runtime.onMessage.addListener(checkContent);
  function checkContent(request, sender, sendResponse) {
    const target = event.target;
    const enteredWords = target.value;
    console.log(enteredWords);
    const isSpacePressed = event.data === " ";
    const isContentEditable = target.hasAttribute("contentedditable");
    const isInputTypeText = target.getAttribute("type") === "text";
    if ((isContentEditable || isInputTypeText) && isSpacePressed) {
      const wordConfig = displayPopup(enteredWords);

      if (wordConfig.wrongWord) {
        // execute function that display popup with buttons
        // displayPopup({ target, wordConfig });
        wordConfig.correctWords; // show in popup
        wordConfig.wrongWord; // replace with selected correctWord
        console.log(wordConfig.correctWords)
        sendResponse({ value: wordConfig.correctWords });
        // sendResponse({ value1: wordConfig.correctWords });
        // sendResponse({ value2: wordConfig.correctWords });
      }
    }
  }
});
// checkContent();
function displayPopup(content) {
  // function inputs content from input/contenteditable and return object {[wrongWord]: ["correctWord1", "correctWord1"]}
  const words = content.split(" ");
  const wrongWord = words.find((word) => {
    currentWord = dictionary[word];
    console.log(currentWord)
    if (dictionary[word]) {
      return true;
    }
    return false;
  });

  return {
    wrongWord: wrongWord,
    correctWords: dictionary[wrongWord],
  };
}

// function gotMessage(request, sender, sendResponse) {

//   if (inputField.value == "heldp") {
//     const words1 = (document.innerHTML = heldp.heldp);
//   }
//   if (inputField.value == "helo") {
//     const words2 = (document.innerHTML = helo.Helo);
//     sendResponse({ value: words2 });
//   }
//   if (inputField.value == "cat") {
//     const words3 = (document.innerHTML = cat.Cat);
//     sendResponse({ value: words3 });
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//   buttonsClicked();
// });

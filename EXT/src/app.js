const inputField = document.querySelector("input");
const heldp = {
  heldp: ["help", "held", "hello"],
};

const helo = {
  Helo: ["hello", "Help", "Hell"],
};

const cat = {
  Cat: ["Dog", "Rat", "bat"],
};
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse) {
  console.log(request);
  console.log(sender);
  if (inputField.value == "heldp") {
    const words1 = (document.innerHTML = heldp.heldp);
    sendResponse({ value: words1 });
  }
  if (inputField.value == "helo") {
    const words2 = (document.innerHTML = helo.Helo);
    sendResponse({ value: words2 });
  }
  if (inputField.value == "cat") {
    const words3 = (document.innerHTML = cat.Cat);
    sendResponse({ value: words3 });
  }
}
// document.addEventListener("DOMContentLoaded", function () {
//   buttonsClicked();
// });


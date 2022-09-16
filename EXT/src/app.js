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
  const testWord = "google";
  if (inputField.value == "heldp") {
    const test = (document.innerHTML = testWord);

    sendResponse({ value: test });
  }
  if (inputField.value == "helo") {
    inputField.value = heldp.heldp[2];
    sendResponse({ value: inputField.value });
    return false;
  }
  if (inputField.value == "cat") {
    inputField.value = cat.Cat[0];
  }
}

const currentWord = document.getElementById("current-word");
const hint = document.getElementById("hint");


document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").addEventListener("click", buttonClicked);

  function buttonClicked() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "test", setValue);
    });
  }

  function setValue(res) {
    const container = document.createElement("div");
    container.className = "word";
    currentWord.textContent = `${res.value}`;
    container.textContent = `${res.value}`;
    document.body.appendChild(container);
  }
});

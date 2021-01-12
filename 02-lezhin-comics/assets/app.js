// language-list open/close
let languageButton = document.querySelector(".lezhin-page-language-button");
let languageList = document.querySelector(".language-list");
let current = 0;

let openList = function () {
  languageList.style.display = "block";
  current = 1;
};

let closeList = function () {
  languageList.style.display = "none";
  current = 0;
};

let languageListHandler = function () {
  if(current === 0) {
    openList();
  } else {
    closeList();
  }
};

languageButton.addEventListener("click", languageListHandler);

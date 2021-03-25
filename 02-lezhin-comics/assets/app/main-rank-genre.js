// Main ranking - 장르 버튼 생성
// 전체, 로맨스, bl, 드라마, 판타지, 개그, 액션 등등
const selectGenre = document.querySelector("#select-genre");
let rankingKeys = Object.keys(state.랭킹);

function createGenre () {
  for (let i=0; i<rankingKeys.length; i++) {
    let genreButton = document.createElement("button");
    genreButton.setAttribute("type", "button");
    genreButton.setAttribute("id", rankingKeys[i]+"-button");
    genreButton.setAttribute("class", "select-content");
    genreButton.setAttribute("value", rankingKeys[i]);
    genreButton.setAttribute("role", "tab");
    genreButton.setAttribute("aria-controls", rankingKeys[i]+"-rank");
    genreButton.innerHTML = rankingKeys[i];
    selectGenre.appendChild(genreButton);
  }
};

createGenre();

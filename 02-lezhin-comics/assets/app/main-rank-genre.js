// Main ranking - 장르 버튼 생성
// 전체, 로맨스, bl, 드라마, 판타지, 개그, 액션 등등
const selectGenre = document.querySelector("#select-genre");
let rankingKeys = Object.keys(state.랭킹);

rankingKeys.forEach((key, index) => {
  let genreButton = document.createElement("button");
  genreButton.setAttribute("type", "button");
  genreButton.className = "select-content";
  genreButton.setAttribute("role", "tab");
  genreButton.setAttribute("aria-controls", "ranking-list-item");
  genreButton.setAttribute("data-name", "genre");
  genreButton.setAttribute("data-genre", key);
  genreButton.textContent = key;
  selectGenre.appendChild(genreButton);

  if (index === 0) { // 페이지 로드시 '전체'에 .select-active 적용
    genreButton.classList.add('select-active');
  }
});

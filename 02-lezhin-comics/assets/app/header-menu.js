// Header Menu - 페이지 이동하는 링크 생성
// 연재, 로맨스, 소년, 드라마, bl 등등
const menuDiv = document.querySelector("#nav-menu");
let menuKeys = Object.keys(state.메뉴);

function createMenu () {
  for (let i=0; i<menuKeys.length; i++) {
    let menuItem = document.createElement("a");
    menuItem.setAttribute("class", "menu-anchor");
    menuItem.setAttribute("href", "./lezhin-home.html");
    menuItem.innerHTML = menuKeys[i];
    menuDiv.appendChild(menuItem);
  }
};
createMenu();

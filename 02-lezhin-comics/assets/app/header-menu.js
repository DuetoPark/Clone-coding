// Header Menu - 페이지 이동하는 링크 생성
// 연재, 로맨스, 소년, 드라마, bl 등등
const menuOl = document.querySelector("#nav-menu");
let menuKeys = Object.keys(state.메뉴);

function createMenu () {
  for (let i=0; i<menuKeys.length; i++) {
    let menuLi = document.createElement("li");
    menuLi.className = "menu-list-items";
    menuOl.appendChild(menuLi);

    let menuItem = document.createElement("a");
    menuItem.className = "menu-anchor";
    menuItem.setAttribute("href", "./lezhin-home.html");
    menuItem.innerHTML = menuKeys[i];
    menuLi.appendChild(menuItem);
  }
};
createMenu();

// Header Menu - 페이지 이동하는 링크 생성
// 연재, 로맨스, 소년, 드라마, bl 등등
const menuUl = document.querySelector("#nav-menu");
let menuKeys = Object.keys(state.메뉴);

function createMenu () {
  for (let i=0; i<menuKeys.length; i++) {
    let menuList = document.createElement("li");
    menuList.setAttribute("class", "menu-list-items");
    menuList.setAttribute("role", "none");
    menuUl.appendChild(menuList);

    let menuItem = document.createElement("a");
    menuItem.setAttribute("class", "menu-anchor");
    menuItem.setAttribute("href", "./comics.html");
    menuItem.setAttribute("role", "menuitem");
    menuItem.innerHTML = menuKeys[i];
    menuList.appendChild(menuItem);
  }
};
createMenu();

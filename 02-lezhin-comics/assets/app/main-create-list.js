//메인 베너 목록 생성
const bannerDiv = document.querySelector("#banner-slider");
let bannerArray = state.배너;

function createBanner () {
  for (let i=0; i<bannerArray.length; i++) {
    let bannerArticle = document.createElement("article");
    bannerArticle.className = 'banner-article';
    bannerArticle.innerHTML = `<h5 class='hidden'>${bannerArray[i].altValue}</h5>`;
    bannerDiv.appendChild(bannerArticle);

    let bannerAnchor = document.createElement("a");
    bannerAnchor.className = "banner-anchor";
    bannerAnchor.setAttribute("href", bannerArray[i].path);
    bannerArticle.appendChild(bannerAnchor);

    let bannerPicture = document.createElement("picture");
    bannerArticle.appendChild(bannerPicture);

    let bannerSourceMobile = document.createElement("source");
    bannerSourceMobile.setAttribute("media", "(max-width: 640px)");
    bannerSourceMobile.setAttribute("srcset", "../assets/images/배너-모바일.png");
    bannerPicture.appendChild(bannerSourceMobile);

    let bannerSourceDesktop = document.createElement("source");
    bannerSourceDesktop.setAttribute("media", "(min-width: 641px)");
    bannerSourceDesktop.setAttribute("srcset", "../assets/images/배너-데스크탑.png");
    bannerPicture.appendChild(bannerSourceDesktop);

    let bannerImg = document.createElement("img");
    bannerImg.setAttribute("class","banner-image");
    bannerImg.setAttribute("src", "../assets/images/배너-데스크탑.png");
    bannerImg.setAttribute("alt", bannerArray[i].altValue);
    bannerPicture.appendChild(bannerImg);
  }
}
createBanner();


//랭킹 - 탭 클릭 이벤트
const rankingList = document.querySelector('#ranking-list');
const rankingDommy = document.querySelector('#ranking-list-dommy');

const sectionOfSelectGenre = document.querySelector('#select-genre');
const sectionOfSelectOption = document.querySelector('#ranking-option');
const optionButtons = sectionOfSelectOption.querySelectorAll('.ranking-option-button');
const genreButtons = sectionOfSelectGenre.querySelectorAll('.select-content');

let genre = "";
let option = "";

function createRankingList(dataArray = [], index, genre, option) {
  const rankingListItem = rankingDommy.querySelector('li').cloneNode(true);
  const listAnchor = rankingListItem.querySelector('a');
  const listRank = rankingListItem.querySelector('.rank');
  const listName = rankingListItem.querySelector('.rank-webtoon-name strong');
  const listAuthor = rankingListItem.querySelector('.rank-webtoon-author strong');
  const listOption = rankingListItem.querySelector('.rank-webtoon-option');
  const listThumbnail = rankingListItem.querySelector('.rank-thumbnail');

  rankingListItem.classList.remove('hidden');
  listAnchor.setAttribute('aria-label', dataArray.name);
  listAnchor.setAttribute('tabindex', 0);
  listRank.textContent = index + 1;
  listName.textContent = dataArray.name;
  listAuthor.textContent = dataArray.author;
  listOption.textContent = dataArray.option;
  listThumbnail.setAttribute('alt', dataArray.name);
  rankingList.appendChild(rankingListItem);
}

function rankingInit() {
  genre = "전체";
  option = "실시간";
  state.랭킹[genre][option].forEach((list, index) => {
    createRankingList(list, index, genre, option);
  });
}

function changeGenreOrOption(elem) {
  const isClicked = elem.dataset.name;

  if (isClicked === "option") {
    option = elem.dataset.option;
    optionButtons.forEach(button => {
      button.setAttribute('aria-selected', false)
      button.classList.remove('ranking-option-active');
    });
    // 클릭한 목록에 클래스(.ranking-option-active) 적용
    elem.classList.add('ranking-option-active');
  } else if (isClicked === "genre") {
    genre = elem.dataset.genre;
    genreButtons.forEach(button => {
      button.classList.remove('select-active');
      button.setAttribute('aria-selected', false);
    });
    // 클릭한 장르 버튼에 클래스(.select-active) 적용
    elem.classList.add('select-active');
  }
  // 클릭한 버튼에 aria-selected='true' 적용
  elem.setAttribute('aria-selected', true);
}

function ouputRankList() {
  const doesExistData = state.랭킹[genre][option].length;

  if (!doesExistData) {
    rankingList.innerHTML = `
      <li>
        <div>작품을 준비 중입니다.</div>
      </li>
    `;
  } else {
    state.랭킹[genre][option].forEach((list, index) => {
      createRankingList(list, index, genre, option);
    });
  }
}

function rankClickHandler(e) {
  changeGenreOrOption(e.target);
  rankingList.innerHTML = "";
  ouputRankList();
}

rankingInit();
sectionOfSelectGenre.addEventListener('click', rankClickHandler);
sectionOfSelectOption.addEventListener('click', rankClickHandler);



// 목록 버튼 조작 이벤트
const webtoonLists = document.querySelectorAll('[data-name="webtoon-list"]');
const listControlGroups = document.querySelectorAll('.list-control-group');
let screenWidth = window.innerWidth;
let allLists = [];
let allCategories = [];

function Create(domOl, dataArray, category) {
  this.domOl =  document.querySelector(domOl);
  this.address = domOl;
  this.dataArray = dataArray;
  this.category = category;
  this.currentCount = 1;
  if (this.category === 'newWebtoon') {
    this.toShow = 4;
  } else if (this.category === 'sale') {
    this.toShow = 3;
  } else {
    this.toShow = 6;
  }
  this.limit = Math.floor(dataArray.length / this.toShow);
  this.currentData = [];

  dataArray.forEach(item => {
    let createLi = document.createElement("li");
    if (this.category === 'sale') {
      createLi.setAttribute("class", "sale-list-items");
      createLi.setAttribute("aria-label", item.altValue);
    } else {
      createLi.setAttribute("class","works-list-items");
      createLi.setAttribute("aria-label", item.name);
    }
    this.domOl.appendChild(createLi);

    let createAnchor = document.createElement("a");
    createAnchor.setAttribute("class", "works-anchor");
    createAnchor.setAttribute("href", "#");
    createLi.appendChild(createAnchor);

    if (item.name) {
      let createTitle = document.createElement("strong");
      createTitle.setAttribute("class", "works-title");
      createTitle.innerHTML = item.name;
      createAnchor.appendChild(createTitle);

      let createThumnail = document.createElement("img");
      createThumnail.setAttribute("class", "works-thumbnail");
      createThumnail.setAttribute("src", "../assets/images/썸네일-공통.png");
      createThumnail.setAttribute("alt", item.name);
      createAnchor.appendChild(createThumnail);
    }

    if (item.altValue) {
      let createThumnail = document.createElement("img");
      createThumnail.setAttribute("class", "sale-thumbnail");
      createThumnail.setAttribute("src", "../assets/images/썸네일-세일.png");
      createThumnail.setAttribute("alt", item.altValue);
      createAnchor.appendChild(createThumnail);
    }

    if (item.price) {
      let goodsPrice = document.createElement("strong");
      goodsPrice.setAttribute("class", "goods-price");
      goodsPrice.innerHTML = item.price;
      createAnchor.appendChild(goodsPrice);
    }
  });

  allLists.push(this);
  allCategories.push(this.category);
}

function listFactory(domOl, dataArray, category) {
  return new Create(domOl, dataArray, category);
}

function createLists() {
  listFactory("#new-webtoon-list", state.신규코믹스.신작연재, 'newWebtoon');
  listFactory("#new-cartoon-list", state.신규코믹스.신규만화, 'newCartoon');
  listFactory("#adult-edit-list", state.장르별코믹스.개정판, 'adultEdit');
  listFactory("#adult-list", state.장르별코믹스.성인물, 'adult');
  listFactory("#bl-list", state.장르별코믹스.BL, 'bl');
  listFactory("#school-list", state.장르별코믹스.학원, 'school');
  listFactory("#romance-list", state.장르별코믹스.로맨스, 'romance');
  listFactory("#gag-list", state.장르별코믹스.개그, 'gag');
  listFactory("#fantasy-list", state.장르별코믹스.판타지, 'fantasy');
  listFactory("#goods-list", state.굿즈, 'goods');
  listFactory("#sale-list", state.장르별코믹스.SALE, 'sale');
}

function listControlInit() {
  if (screenWidth >= 960) {
    listControlGroups.forEach(group => group.classList.remove('hidden'));
    createLists();
    allLists.forEach(object => updateList(object));
  } else {
    createLists();
  }
}

function updateList(object) {
  object.domOl.innerHTML = '';
  object.currentData = object.dataArray.filter(item => {
    return item.id <= (object.toShow * object.currentCount) && item.id > (object.toShow * (object.currentCount - 1));
  });
  listFactory(object.address, object.currentData, object.category);
  allLists.splice(-1, 1);
  allCategories.splice(-1, 1);
}

function listHandler(e) {
  const thisCategory = this.dataset.category;
  const index = allCategories.indexOf(thisCategory);
  const thisObject = allLists[index];
  const arrow = e.target.dataset.arrow;

  thisObject.currentData = []; // 현 데이터 초기화

  if (arrow === "pre" && thisObject.currentCount > 1) {
    thisObject.currentCount -= 1;
    updateList(thisObject);
  } else if (arrow === "next" && thisObject.currentCount <= thisObject.limit) {
    thisObject.currentCount += 1;
    updateList(thisObject);
  }
}

function debounce(func, wait = 100, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function resizeHandler(e) {
  screenWidth = e.target.innerWidth;
  console.log(screenWidth);
  if (screenWidth < 960) {
    allLists.forEach(item => {
      item.currentCount = 1;
      item.domOl.innerHTML = '';
    });
    allLists = [];
    allCategories = [];
    createLists();
    listControlGroups.forEach(group => group.classList.add('hidden'));
  } else {
    allLists.forEach(item => {
      item.currentCount = 1;
      item.domOl.innerHTML = '';
    });
    allLists = [];
    allCategories = [];
    createLists();
    listControlGroups.forEach(group => group.classList.remove('hidden'));
  }
}

listControlInit();
webtoonLists.forEach(article => article.addEventListener('click', listHandler));
window.addEventListener('resize', debounce(resizeHandler));



// Footer 생성자
function FooterElement (selectedElement, dataArray) {
  this.selectedElement =  document.querySelector(selectedElement);
  this.dataArray = dataArray;

  this.createList = function () {
    for (let i=0; i<this.dataArray.length; i++) {
      let createLi = document.createElement("li");
      createLi.setAttribute("class","footer-list-items");
      this.selectedElement.appendChild(createLi);

      let createAnchor = document.createElement("a");
      createAnchor.setAttribute("class","footer-anchor");
      createAnchor.setAttribute("href", "#");
      createAnchor.innerHTML = this.dataArray[i].value;
      createLi.appendChild(createAnchor);
    }
  };

  this.createElement = function (element) {
    for (let i=0; i<this.dataArray.length; i++) {
      let contactElement = document.createElement(element);
      contactElement.setAttribute("class", "contact-"+element);
      this.selectedElement.appendChild(contactElement);
    }
  }

  this.createChild = function (parents, child, key) {
    let selectParents = document.querySelectorAll(".contact-"+parents);
    for (let i=0; i<this.dataArray.length; i++) {
      let contactChild = document.createElement(child);
      contactChild.setAttribute("class", "contact-"+child);
      selectParents[i].appendChild(contactChild);
      if (key === "term") {
        contactChild.innerHTML = this.dataArray[i].term;
      } else if (key === "desc") {
        contactChild.innerHTML = this.dataArray[i].desc;
      }
    }
  }
}

let info = new FooterElement("#lezhin-info", state.footer.info);
let sns = new FooterElement("#lezhin-sns", state.footer.sns);
let contact = new FooterElement("#lezhin-contact", state.footer.contact);

info.createList();
sns.createList();
contact.createElement("div");
contact.createChild("div", "dt", "term");
contact.createChild("div", "dd", "desc");

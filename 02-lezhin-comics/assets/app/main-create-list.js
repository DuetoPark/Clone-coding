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


// 목록 만드는 생성자
function Create(domOl, dataArray) {
  this.domOl =  document.querySelector(domOl);
  this.dataArray = dataArray;

  this.createList = function () {
    for (let i=0; i<this.dataArray.length; i++) {
      let createLi = document.createElement("li");
      createLi.setAttribute("class","works-list-items");
      createLi.setAttribute("aria-label", this.dataArray[i].name);
      this.domOl.appendChild(createLi);

      let createAnchor = document.createElement("a");
      createAnchor.setAttribute("class", "works-anchor");
      createAnchor.setAttribute("href", "#");
      createLi.appendChild(createAnchor);

      let createTitle = document.createElement("strong");
      createTitle.setAttribute("class", "works-title");
      createTitle.innerHTML = this.dataArray[i].name;
      createAnchor.appendChild(createTitle);

      let createThumnail = document.createElement("img");
      createThumnail.setAttribute("class", "works-thumbnail");
      createThumnail.setAttribute("src", "../assets/images/썸네일-공통.png");
      createThumnail.setAttribute("alt", this.dataArray[i].name);
      createAnchor.appendChild(createThumnail);
    }
  };
}

let newWebtoon = new Create("#new-webtoon-list", state.신규코믹스.신작연재);
let newCartoon = new Create("#new-cartoon-list", state.신규코믹스.신규만화);
let adultEdit = new Create("#adult-edit-list", state.장르별코믹스.개정판);
let adult = new Create("#adult-list", state.장르별코믹스.성인물);
let bl = new Create("#bl-list", state.장르별코믹스.BL);
let school = new Create("#school-list", state.장르별코믹스.학원);
let romance = new Create("#romance-list", state.장르별코믹스.로맨스);
let gag = new Create("#gag-list", state.장르별코믹스.개그);
let fantasy = new Create("#fantasy-list", state.장르별코믹스.판타지);
let goods = new Create("#goods-list", state.굿즈);

newWebtoon.createList();
newCartoon.createList();
adultEdit.createList();
adult.createList();
bl.createList();
school.createList();
romance.createList();
gag.createList();
fantasy.createList();
goods.createList();


// 세일 목록 생성
const saleOl =  document.querySelector("#sale-list");
let saleDataArray = state.장르별코믹스.SALE;

function createSaleList () {
  for (let i=0; i<saleDataArray.length; i++) {
    let saleLi = document.createElement("li");
    saleLi.setAttribute("class", "sale-list-items");
    saleLi.setAttribute("aria-label", saleDataArray[i].altValue);
    saleOl.appendChild(saleLi);

    let saleAnchor = document.createElement("a");
    saleAnchor.setAttribute("href","#");
    saleAnchor.setAttribute("class", "sale-anchor");
    saleLi.appendChild(saleAnchor);

    let saleThumbnail = document.createElement("img");
    saleThumbnail.setAttribute("class", "sale-thumbnail");
    saleThumbnail.setAttribute("src", "../assets/images/썸네일-세일.png");
    saleThumbnail.setAttribute("alt", saleDataArray[i].altValue);
    saleAnchor.appendChild(saleThumbnail);
  }
}
createSaleList();


// 레진굿즈샵 가격 생성
function createGoodsList () {
  for (let i=0; i<goods.dataArray.length; i++) {
    let goodsPrice = document.createElement("strong");
    goodsPrice.setAttribute("class", "goods-price");
    goodsPrice.innerHTML = goods.dataArray[i].price;
    document.querySelectorAll("#goods .works-anchor")[i].appendChild(goodsPrice);
  }
}
createGoodsList();


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

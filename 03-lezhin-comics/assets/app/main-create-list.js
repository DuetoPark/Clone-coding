//메인 베너 목록 생성
const bannerSection = document.querySelector(".banner-slider");
let bannerArray = state.배너;

function createBanner () {
  for (let i=0; i<bannerArray.length; i++) {
    let bannerAnchor = document.createElement("a");
    bannerAnchor.setAttribute("href", "#");
    bannerSection.appendChild(bannerAnchor);

    let bannerPicture = document.createElement("picture");
    bannerAnchor.appendChild(bannerPicture);

    let bannerSource = document.createElement("source");
    bannerSource.setAttribute("media", "(max-width: 640px)");
    bannerSource.setAttribute("srcset", "../assets/images/배너-모바일.png");
    bannerPicture.appendChild(bannerSource);

    let bannerImg = document.createElement("img");
    bannerImg.setAttribute("class","banner-image");
    bannerImg.setAttribute("src", "../assets/images/배너-데스크탑.png");
    bannerImg.setAttribute("alt", bannerArray[i].altValue);
    bannerPicture.appendChild(bannerImg);
  }
}
createBanner();


// 웹툰 목록 생성하는 생성자
function Create(domOl, dataArray, name) {
  this.domOl =  document.querySelector(domOl);
  this.dataArray = dataArray;

  this.createList = function () {
    for (let i=0; i<this.dataArray.length; i++) {
      let createLi = document.createElement("li");
      this.domOl.appendChild(createLi);

      let createAnchor = document.createElement("a");
      createAnchor.setAttribute("class", name+"-anchor");
      createAnchor.setAttribute("href", "#");
      createLi.appendChild(createAnchor);

      let createTitle = document.createElement("strong");
      createTitle.setAttribute("class", name+"-title");
      createTitle.innerHTML = this.dataArray[i].name;
      createAnchor.appendChild(createTitle);

      let createThumnail = document.createElement("img");
      createThumnail.setAttribute("class", name+"-thumbnail");
      createThumnail.setAttribute("src", "../assets/images/썸네일-공통.png");
      createThumnail.setAttribute("alt", this.dataArray[i].name);
      createAnchor.appendChild(createThumnail);
    }
  };
}

let newWebtoon = new Create("#new-webtoon-list", state.신규코믹스.신작연재, "new-webtoon");
let newCartoon = new Create("#new-cartoon-list", state.신규코믹스.신규만화, "new-cartoon");
let adultEdit = new Create("#adult-edit-list", state.장르별코믹스.개정판, "adult-edit");
let adult = new Create("#adult-list", state.장르별코믹스.성인물, "adult");
let bl = new Create("#bl-list", state.장르별코믹스.BL, "bl");
let school = new Create("#school-list", state.장르별코믹스.학원, "school");
let romance = new Create("#romance-list", state.장르별코믹스.로맨스, "romance");
let gag = new Create("#gag-list", state.장르별코믹스.개그, "gag");
let fantasy = new Create("#fantasy-list", state.장르별코믹스.판타지, "fantasy");

newWebtoon.createList();
newCartoon.createList();
adultEdit.createList();
adult.createList();
bl.createList();
school.createList();
romance.createList();
gag.createList();
fantasy.createList();


// 세일 목록 생성
const saleOl =  document.querySelector("#sale-list");
let saleDataArray = state.장르별코믹스.SALE;

function createSaleList () {
  for (let i=0; i<saleDataArray.length; i++) {
    let saleLi = document.createElement("li");
    saleOl.appendChild(saleLi);

    let saleAnchor = document.createElement("a");
    saleAnchor.setAttribute("href","#");
    saleAnchor.setAttribute("class", "sale-anchor");
    saleLi.appendChild(saleAnchor);

    let saleThumbnail = document.createElement("img");
    saleThumbnail.setAttribute("class", "sale-thumbnail");
    saleThumbnail.setAttribute("src", "../assets/images/썸네일-공통.png");
    saleThumbnail.setAttribute("alt", saleDataArray[i].altValue);
    saleAnchor.appendChild(saleThumbnail);
  }
}
createSaleList();


// 레진굿즈샵 목록 생성
const goodsOl =  document.querySelector("#goods-list");
let goodsDataArray = state.굿즈;

function createGoodsList () {
  for (let i=0; i<goodsDataArray.length; i++) {
    let goodsLi = document.createElement("li");
    goodsOl.appendChild(goodsLi);

    let goodsAnchor = document.createElement("a");
    goodsAnchor.setAttribute("href","#");
    goodsAnchor.setAttribute("class", "goods-anchor");
    goodsLi.appendChild(goodsAnchor);

    let goodsTitle = document.createElement("strong");
    goodsTitle.setAttribute("class", "goods-title");
    goodsTitle.innerHTML = goodsDataArray[i].name;
    goodsAnchor.appendChild(goodsTitle);

    let goodsPrice = document.createElement("strong");
    goodsPrice.setAttribute("class", "goods-price");
    goodsPrice.innerHTML = goodsDataArray[i].price;
    goodsAnchor.appendChild(goodsPrice);

    let goodsThumbnail = document.createElement("img");
    goodsThumbnail.setAttribute("class", "goods-thumbnail");
    goodsThumbnail.setAttribute("src", "../assets/images/썸네일-공통.png");
    goodsThumbnail.setAttribute("alt", goodsDataArray[i].name);
    goodsAnchor.appendChild(goodsThumbnail);
  }
}
createGoodsList();

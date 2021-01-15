// Serialization.html
// Button Click Event - Nav.serialization-nav
const weekButton = document.querySelectorAll("button.week-button.type");
const weekButtonlist = document.querySelector(".serialization-nav .type-list");
const dailyWebtoon = document.querySelectorAll(".serialization-webtoon");

let today = new Date();
let mm = today.getDay();
let selected = "";

for (let i=0; i<dailyWebtoon.length; i++){
  dailyWebtoon[i].style.display = "none";
}

for (let i=0; i<weekButton.length; i++) {
  if(Number(weekButton[i].value) === mm){
    weekButton[i].classList.add("type-active");
    dailyWebtoon[i].style.display = 'block';
  }
}


function changeList (target) {
  dailyWebtoon[mm-1].style.display = "none";
  weekButton[mm-1].classList.remove("type-active");

  switch (target.value) {
    case "1":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;

    case "2":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;

    case "3":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;

    case "4":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;

    case "5":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;

    case "6":
    dailyWebtoon[target.value-1].style.display = "block";
    weekButton[target.value-1].classList.add("type-active");
    break;
  }
  mm = target.value;

  if (target.value === "0") {
    dailyWebtoon[6].style.display = "block";
    weekButton[6].classList.add("type-active");
    mm = 7;
  } else if (target.value === "7") {
    dailyWebtoon[7].style.display = "block";
    weekButton[7].classList.add("type-active");
    mm = 8;
  }
}

function dailyWebtoonHandler (e) {
  changeList(e.target);
}

weekButtonlist.addEventListener("click", dailyWebtoonHandler);

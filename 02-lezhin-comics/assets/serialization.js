// Serialization.html
// Button Click Event - Nav.serialization-nav
const weekButtonlist = document.querySelector(".serialization-nav .type-list");
const dailyWebtoon = document.querySelectorAll(".serialization-webtoon");

function changeList (target) {
  for (let i=0; i<dailyWebtoon.length; i++){
    dailyWebtoon[i].style.display = "none";
  }

  switch (target.value) {
    case "mon":
    dailyWebtoon[0].style.display = "block";
    break;

    case "tue":
    dailyWebtoon[1].style.display = "block";
    break;

    case "wed":
    dailyWebtoon[2].style.display = "block";
    break;

    case "thu":
    dailyWebtoon[3].style.display = "block";
    break;

    case "fri":
    dailyWebtoon[4].style.display = "block";
    break;

    case "sat":
    dailyWebtoon[5].style.display = "block";
    break;

    case "sun":
    dailyWebtoon[6].style.display = "block";
    break;

    case "10days":
    dailyWebtoon[7].style.display = "block";
    break;
  }
}

function dailyWebtoonHandler (e) {
  changeList(e.target);
}

weekButtonlist.addEventListener("click", dailyWebtoonHandler);

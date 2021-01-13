// language-list open/close
const languageButton = document.querySelector(".lezhin-page-language-button");
const languageList = document.querySelector(".language-list");
let current = 0;

const openList = function () {
  languageList.style.display = "block";
  current = 1;
};

const closeList = function () {
  languageList.style.display = "none";
  current = 0;
};

const languageListHandler = function () {
  if(current === 0) {
    openList();
  } else {
    closeList();
  }
};

languageButton.addEventListener("click", languageListHandler);



// Button Click Event - Section-work-list
const workArrowButton = document.querySelectorAll(".section-work-button-group");
let currentList = 1;

let workNext = function (target) {
  let preButton = target.previousElementSibling;
  let nextButton = target;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  // currentList++;
  switch (currentList) {
    case 0:
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "block";
      }
      console.log("workNext currentList : "+currentList);
      break;

    case 1:
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "none";
      }
      if (workListItems.length<=12) {
        for(let i=6; i<workListItems.length; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
      } else {
        for(let i=6; i<12; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }

      preButton.classList.remove("work-button-inactive");
      preButton.classList.add("work-button-active");

      currentList = 2;
      console.log("workNext currentList : "+currentList);
      break;

      case 2:
        for(let i=6; i<12; i++){
          workListItems[i].style.display = "none";
        }
        if (workListItems.length<=18) {
          for(let i=12; i<workListItems.length; i++){
            workListItems[i].style.display = "block";
            console.log(workListItems[i]);
          }
          nextButton.classList.remove("work-button-active");
          nextButton.classList.add("work-button-inactive");
        } else {
          for(let i=12; i<18; i++){
            workListItems[i].style.display = "block";
            console.log(workListItems[i]);
          }
        }

        currentList = 3;
        console.log("workNext currentList : "+currentList);
        break;

      case 3:
        for(let i=12; i<18; i++){
          workListItems[i].style.display = "none";
        }
        for(let i=18; i<workListItems.length; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }

        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");

        currentList = 4;
        console.log("workNext currentList : "+currentList);
        break;
  }
};



const workPrevious = function (target) {
  let preButton = target;
  let nextButton = target.nextElementSibling;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  switch (currentList) {
    case 1:
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "block";
      }

      if (workListItems.length<12) {
        for(let i=6; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        for(let i=6; i<12; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      preButton.classList.remove("work-button-active");
      preButton.classList.add("work-button-inactive");
      nextButton.classList.add("work-button-active");
      nextButton.classList.remove("work-button-inactive");

      console.log("workPrevious currentList : "+currentList);
      currentList = 0;
      break;

    case 2:
      for(let i=6; i<12; i++){
        workListItems[i].style.display = "block";
      }
      if (workListItems.length<18) {
        for(let i=12; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
        nextButton.classList.add("work-button-active");
        nextButton.classList.remove("work-button-inactive");
      } else {
        for(let i=12; i<18; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      console.log("workPrevious currentList : "+currentList);
      currentList = 1;
      break;

    case 3:
      for(let i=12; i<18; i++){
        workListItems[i].style.display = "block";
      }

      if (workListItems.length<24) {
        for(let i=18; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        for(let i=18; i<24; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      nextButton.classList.add("work-button-active");
      nextButton.classList.remove("work-button-inactive");

      console.log("workPrevious currentList : "+currentList);
      currentList = 2;
      break;
  }
};

const workArrowHandler = function (e) {
  if(e.target.value === "next"){
    workNext(e.target);
  } else {
    workPrevious(e.target);
  }
}

for (let i=0; i<workArrowButton.length; i++) {
  workArrowButton[i].addEventListener("click", workArrowHandler);
}

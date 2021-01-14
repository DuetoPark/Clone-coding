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

let workNext = function (target) {
  let preButton = target.previousElementSibling;
  let nextButton = target;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  switch (preButton.value) {
    case "pre":
      // preButton 활성화
      preButton.classList.remove("work-button-inactive");
      preButton.classList.add("work-button-active");
      preButton.removeAttribute("disabled");

      // workListItems[0]~[5] 숨기기
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=12) {
        // workListItems[6]~[n] 출력 (workListItems.length < 12)
        for (let i=6; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[6]~[11] 출력 (workListItems.length >= 12)
        for (let i=6; i<12; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }
      // case value 변경
      preButton.value = 2;
      console.log("workNext currentList : "+preButton.value); //개발자도구 확인용
      break;

    case "1":
      // preButton 활성화
      preButton.classList.remove("work-button-inactive");
      preButton.classList.add("work-button-active");
      preButton.removeAttribute("disabled");

      // workListItems[0]~[5] 숨기기
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=12) {
        // workListItems[6]~[n] 출력 (workListItems.length < 12)
        for (let i=6; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[6]~[11] 출력 (workListItems.length >= 12)
        for (let i=6; i<12; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }
      // case value 변경
      preButton.value = 2;
      console.log("workNext currentList : "+preButton.value); //개발자도구 확인용
      break;

    case "2":
      // workListItems[6]~[11] 숨기기
      for(let i=6; i<12; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=18) {
        // workListItems[12]~[n] 출력 (workListItems.length <= 18)
        for(let i=12; i<workListItems.length; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }

        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[12]~[17] 출력 (workListItems.length > 18)
        for(let i=12; i<18; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }

      // case value 변경
      preButton.value = 3;
      console.log("workNext currentList : "+preButton.value);
      break;

    case "3":
      // workListItems[12]~[17] 숨기기
      for(let i=12; i<18; i++){
        workListItems[i].style.display = "none";
      }

      // workListItems[18]~[n] 출력
      for(let i=18; i<workListItems.length; i++){
        workListItems[i].style.display = "block";
        console.log(workListItems[i]);
      }

      // nextButton 비활성화
      nextButton.classList.remove("work-button-active");
      nextButton.classList.add("work-button-inactive");
      nextButton.setAttribute("disabled", "");

      // case value 변경
      preButton.value = 4;
      console.log("workNext currentList : "+preButton.value);
      break;
  }
};



let workPrevious = function (target) {
  let preButton = target;
  let nextButton = target.nextElementSibling;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  switch (preButton.value) {
    case "4":
      // workListItems[18]~[n] 숨기기
      for(let i=18; i<workListItems.length; i++){
        workListItems[i].style.display = "none";
        console.log(workListItems[i]);
      }

      // workListItems[12]~[18] 출력
      for(let i=12; i<18; i++){
        workListItems[i].style.display = "block";
      }

      // nextButton 활성화
      nextButton.classList.add("work-button-active");
      nextButton.classList.remove("work-button-inactive");
      nextButton.removeAttribute("disabled");

      // case value 변경
      preButton.value = 3;
      console.log("workPrevious currentList : "+preButton.value);
      break;

    case "3":
      if (workListItems.length<18) {
        // workListItems[12]~[n] 숨기기  (workListItems.length <= 18)
        for(let i=12; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[12]~[17] 숨기기 (workListItems.length >= 18)
        for(let i=12; i<18; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[6]~[11] 출력
      for(let i=6; i<12; i++){
        workListItems[i].style.display = "block";
      }

      // nextButton 활성화
      nextButton.classList.add("work-button-active");
      nextButton.classList.remove("work-button-inactive");
      nextButton.removeAttribute("disabled");

      // case value 변경
      preButton.value = 2;
      console.log("workPrevious currentList : "+preButton.value);
      break;

    case "2":
      if (workListItems.length<12) {
        // workListItems[6]~[n] 숨기기  (workListItems.length < 12)
        for(let i=6; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[6]~[11] 숨기기 (workListItems.length >= 12)
        for(let i=6; i<12; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[0]~[6] 출력
      for(let i=0; i<6; i++){
        workListItems[i].style.display = "block";
      }

      // nextButton 활성화
      nextButton.classList.add("work-button-active");
      nextButton.classList.remove("work-button-inactive");
      nextButton.removeAttribute("disabled");

      // preButton 비활성화
      preButton.classList.add("work-button-inactive");
      preButton.classList.remove("work-button-active");
      preButton.setAttribute("disabled", "");

      // case value 변경
      preButton.value = 1;
      console.log("workPrevious currentList : "+preButton.value);
      break;
  }
};

let workArrowHandler = function (e) {
  if(e.target.value === "next"){
    workNext(e.target);
  } else {
    workPrevious(e.target);
  }
}

for (let i=0; i<workArrowButton.length; i++) {
  workArrowButton[i].addEventListener("click", workArrowHandler);
}

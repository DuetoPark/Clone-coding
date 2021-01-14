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



// Button Click Event - Section-work-button-group
// 1. Copy ClickEvent(execCommand) 지정하듯이, button의 value를 데이터 저장소처럼 사용.
// 2. switch expression을 .section-work-button-group 안의 버튼인 preButton.value로 지정.
//   이유: 그룹간의 간섭을 없애기 위함.
//     -preButton은 이벤트 변수의 영향을 받음.
//     -preButton에다 value 수정하면, 해당 그룹에서만 바뀜.
//     -그리고 해당 그룹/다른 그룹 선택해도 preButton value 유지됨.

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

for (let i=1; i<6; i++) {
  workArrowButton[i].addEventListener("click", workArrowHandler);
}

for (let i=7; i<workArrowButton.length; i++) {
  workArrowButton[i].addEventListener("click", workArrowHandler);
}



// Button Click Event - Section-work-button-group
// .new-webtoon
const newWebtoonButton = document.querySelector(".new-webtoon .section-work-button-group");
const recommendationButton = document.querySelector(".recommendation .section-work-button-group");


const newWebtoonNext = function (target) {
  const preButton = target.previousElementSibling;
  const nextButton = target;
  const workList = target.parentElement.previousElementSibling;
  const workListItems = workList.children;

  switch (preButton.value) {
    case "pre":
      // preButton 활성화
      preButton.classList.remove("work-button-inactive");
      preButton.classList.add("work-button-active");
      preButton.removeAttribute("disabled");

      // workListItems[0]~[3] 숨기기
      for(let i=0; i<4; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=8) {
        // workListItems[4]~[n] 출력 (workListItems.length < 8)
        for (let i=4; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[4]~[7] 출력 (workListItems.length >= 8)
        for (let i=4; i<8; i++) {
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

      // workListItems[0]~[3] 숨기기
      for(let i=0; i<4; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=8) {
        // workListItems[4]~[n] 출력 (workListItems.length < 8)
        for (let i=4; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[4]~[7] 출력 (workListItems.length >= 8)
        for (let i=4; i<8; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }
      // case value 변경
      preButton.value = 2;
      console.log("workNext currentList : "+preButton.value); //개발자도구 확인용
      break;

    case "2":
      // workListItems[4]~[7] 숨기기
      for(let i=4; i<8; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=12) {
        // workListItems[8]~[n] 출력 (workListItems.length <= 12)
        for(let i=8; i<workListItems.length; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }

        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[8]~[11] 출력 (workListItems.length > 12)
        for(let i=8; i<12; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }

      // case value 변경
      preButton.value = 3;
      console.log("workNext currentList : "+preButton.value);
      break;

    case "3":
      // workListItems[8]~[11] 숨기기
      for(let i=8; i<12; i++){
        workListItems[i].style.display = "none";
      }

      // workListItems[12]~[n] 출력
      for(let i=12; i<workListItems.length; i++){
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



let newWebtoonPrevious = function (target) {
  let preButton = target;
  let nextButton = target.nextElementSibling;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  switch (preButton.value) {
    case "4":
      // workListItems[12]~[n] 숨기기
      for(let i=12; i<workListItems.length; i++){
        workListItems[i].style.display = "none";
        console.log(workListItems[i]);
      }

      // workListItems[8]~[11] 출력
      for(let i=8; i<12; i++){
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
      if (workListItems.length<12) {
        // workListItems[8]~[n] 숨기기  (workListItems.length <= 12)
        for(let i=8; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[8]~[11] 숨기기 (workListItems.length >= 12)
        for(let i=8; i<12; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[4]~[7] 출력
      for(let i=4; i<8; i++){
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
      if (workListItems.length<8) {
        // workListItems[4]~[n] 숨기기  (workListItems.length < 8)
        for(let i=4; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[4]~[7] 숨기기 (workListItems.length >= 8)
        for(let i=4; i<8; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[0]~[3] 출력
      for(let i=0; i<4; i++){
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

  let newWebtoonHandler = function (e) {
    if(e.target.value === "next"){
      newWebtoonNext(e.target);
    } else {
      newWebtoonPrevious(e.target);
    }
  }

  newWebtoonButton.addEventListener("click", newWebtoonHandler);




// .new-webtoon & .recommendation
const recommendationNext = function (target) {
  const preButton = target.previousElementSibling;
  const nextButton = target;
  const workList = target.parentElement.previousElementSibling;
  const workListItems = workList.children;

  switch (preButton.value) {
    case "pre":
      // preButton 활성화
      preButton.classList.remove("work-button-inactive");
      preButton.classList.add("work-button-active");
      preButton.removeAttribute("disabled");

      // workListItems[0]~[3] 숨기기
      for(let i=0; i<3; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=6) {
        // workListItems[3]~[n] 출력 (workListItems.length < 6)
        for (let i=3; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[3]~[5] 출력 (workListItems.length >= 6)
        for (let i=3; i<6; i++) {
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

      // workListItems[0]~[3] 숨기기
      for(let i=0; i<3; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=6) {
        // workListItems[3]~[n] 출력 (workListItems.length < 6)
        for (let i=3; i<workListItems.length; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[3]~[5] 출력 (workListItems.length >= 6)
        for (let i=3; i<6; i++) {
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }
      // case value 변경
      preButton.value = 2;
      console.log("workNext currentList : "+preButton.value); //개발자도구 확인용
      break;

    case "2":
      // workListItems[3]~[5] 숨기기
      for(let i=3; i<6; i++){
        workListItems[i].style.display = "none";
      }

      if (workListItems.length<=9) {
        // workListItems[6]~[n] 출력 (workListItems.length <= 9)
        for(let i=6; i<workListItems.length; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }

        // nextButton 비활성화
        nextButton.classList.remove("work-button-active");
        nextButton.classList.add("work-button-inactive");
        nextButton.setAttribute("disabled", "");
      } else {
        // workListItems[6]~[8] 출력 (workListItems.length > 9)
        for(let i=6; i<9; i++){
          workListItems[i].style.display = "block";
          console.log(workListItems[i]);
        }
      }

      // case value 변경
      preButton.value = 3;
      console.log("workNext currentList : "+preButton.value);
      break;

    case "3":
      // workListItems[6]~[8] 숨기기
      for(let i=6; i<9; i++){
        workListItems[i].style.display = "none";
      }

      // workListItems[9]~[n] 출력
      for(let i=9; i<workListItems.length; i++){
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



let recommendationPrevious = function (target) {
  let preButton = target;
  let nextButton = target.nextElementSibling;
  let workList = target.parentElement.previousElementSibling;
  let workListItems = workList.children;

  switch (preButton.value) {
    case "4":
      // workListItems[9]~[n] 숨기기
      for(let i=9; i<workListItems.length; i++){
        workListItems[i].style.display = "none";
        console.log(workListItems[i]);
      }

      // workListItems[6]~[8] 출력
      for(let i=6; i<9; i++){
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
      if (workListItems.length<9) {
        // workListItems[6]~[n] 숨기기  (workListItems.length <= 9)
        for(let i=6; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[6]~[8] 숨기기 (workListItems.length >= 9)
        for(let i=6; i<9; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[0]~[3] 출력
      for(let i=3; i<6; i++){
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
      if (workListItems.length<6) {
        // workListItems[3]~[n] 숨기기  (workListItems.length < 6)
        for(let i=4; i<workListItems.length; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      } else {
        // workListItems[3]~[5] 숨기기 (workListItems.length >= 6)
        for(let i=3; i<6; i++){
          workListItems[i].style.display = "none";
          console.log(workListItems[i]);
        }
      }

      // workListItems[0]~[3] 출력
      for(let i=0; i<3; i++){
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

  let recommendationHandler = function (e) {
    if(e.target.value === "next"){
      recommendationNext(e.target);
    } else {
      recommendationPrevious(e.target);
    }
  }

  recommendationButton.addEventListener("click", recommendationHandler);

// 로그인 모달 이벤트
const loginButton = document.querySelector(".login-button");
const loginModal = document.querySelector(".login-modal");
const serialInquiryModal = document.querySelector(".serial-inquiry-modal-container");
let currentStatus = 0;

// '로그인 버튼' 동작
// -로그인 모달 열림
function loginButtonFunction () {
  // 애니메이션 진행중에 .modal-active 클래스 추가
  // - 진행중에 클래스를 추가하는 이유
  //   : 프로그램은 작성 순서대로 진행되기 때문이다.
  //   : 애니메이션 실행 -(공백)- 클래스 추가
  //   : 애니메이션 100%에서 {display: 1; opacity: 1;}
  //   : (공백)에서 {display: none; opacity:1;}
  //   : 클래스 추가 {display: 1; opacity: 1;}
  //   공백일때 잠깐 지워지니까 동작 도중에 깜빡깜빡하는 현상이 나타남.
  //   setTimeout을 사용해서 애니메이션이 끝나기 전에 클래스를 추가하면 됨.
  if (currentStatus === 0) {
    loginModal.classList.add("modal-open-animation");
    document.body.classList.add("body-scroll-off");
    window.setTimeout(function () {
      loginModal.classList.add("modal-active");
    }, 200);
    window.setTimeout(function () {
      loginModal.classList.remove("modal-open-animation");
    }, 300);
    currentStatus = 1;
  } else if (currentStatus === 1){
    closeLoginWindow();
    currentStatus = 0;
  }
}

//'로그인 닫기 버튼' 동작
// -로그인 모달 닫힘
function closeLoginWindow () {
  loginModal.classList.add("modal-close-animation");
  window.setTimeout(function () {
    loginModal.classList.remove("modal-active");
    document.body.classList.remove("body-scroll-off");
  }, 200);
  window.setTimeout(function () {
    loginModal.classList.remove("modal-close-animation");
  }, 300);
  currentStatus = 0;
}

// '연재문의 버튼' 동작
// -연재문의 모달 열림
function openSerialInquiry () {
  loginButtonFunction();
  serialInquiryModal.classList.remove("inactive");
  document.body.classList.add("hidden");
}

// '연재문의 닫기 버튼' 동작
// - 연재문의 모달 닫힘
function closeSerialInquiry () {
  serialInquiryModal.classList.add("inactive");
  document.body.classList.remove("hidden");
}



function loginButtonHandler () {
  loginButtonFunction();
}

function loginModalHandler (e) {
  if (e.target.className === "login-close") {
    closeLoginWindow();
  } else if (e.target.className === "login-modal-contact") {
    openSerialInquiry();
  }
}

function serialInquiryModalHandler (e) {
  if (e.target.className === "serial-inquiry-close") {
    closeSerialInquiry();
  }
}

loginButton.addEventListener("click", loginButtonHandler);
loginModal.addEventListener("click", loginModalHandler);
serialInquiryModal.addEventListener("click", serialInquiryModalHandler);

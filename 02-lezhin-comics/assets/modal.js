// Modal event
const loginButton = document.querySelector(".login-button");
const closeModalButton = document.querySelector(".modal-close");
const loginModal = document.querySelector(".login-modal");


function openLoginWindow () {
  // 애니메이션 진행중에 .modal-active 클래스 추가
  // - 진행중에 클래스를 추가하는 이유
  //   : 프로그램은 작성 순서대로 진행되기 때문이다.
  //   : 애니메이션 실행 -(공백)- 클래스 추가
  //   : 애니메이션 100%에서 {display: 1; opacity: 1;}
  //   : (공백)에서 {display: none; opacity:1;}
  //   : 클래스 추가 {display: 1; opacity: 1;}
  //   공백일때 잠깐 지워지니까 동작 도중에 깜빡깜빡하는 현상이 나타남.
  //   setTimeout을 사용해서 애니메이션이 끝나기 전에 클래스를 추가하면 됨.
  loginModal.classList.add("modal-open-animation");
  document.body.classList.add("body-scroll-off");
  window.setTimeout(function () {
    loginModal.classList.add("modal-active");
  }, 200);
  window.setTimeout(function () {
    loginModal.classList.remove("modal-open-animation");
  }, 300);
}

function closeLoginWindow () {
  loginModal.classList.add("modal-close-animation");
  window.setTimeout(function () {
    loginModal.classList.remove("modal-active");
    document.body.classList.remove("body-scroll-off");
  }, 200);
  window.setTimeout(function () {
    loginModal.classList.remove("modal-close-animation");
  }, 300);
}

function openLoginHandler () {
  openLoginWindow();
}

function closeLoginHandler () {
  closeLoginWindow();
}

loginButton.addEventListener("click", openLoginHandler);
closeModalButton.addEventListener("click", closeLoginHandler);

// 약관동의 이벤트
// -'전체동의' 선택하면 이용약관/개인정보/마케팅 체크박스 동시 선택
// -필수요소 모두 선택하면 '동의'버튼 활성화
// Form 변수
const form = document.querySelector(".lezhin-article-agreement-form");
const tos = document.querySelector("#ToS");
const privacy = document.querySelector("#privacy");
const marketing = document.querySelector("#marketing");
const age14 = document.querySelector("#age-14");
const inputEmail = document.querySelector("#authentication-email");
const inputNumber = document.querySelector("#authentication-number");

// Article
const articleAgreement = document.querySelector(".lezhin-article-agreement");
const articleAuthentication = document.querySelector(".lezhin-article-authentication");
const articlePrivacy = document.querySelector(".lezhin-article-privacy");

// Button
const agreementButton = document.querySelector(".sign-up-agreement");
const sendEmailButton = document.querySelector(".send-email");
const resendEmailButton = document.querySelector(".resend-email");
const finishAuthenticationButton = document.querySelector(".finish-authentication");

// Fieldset
const authenticationNumber = document.querySelector(".authentication-number");

agreementButton.setAttribute("disabled", "");
resendEmailButton.setAttribute("disabled", "");
finishAuthenticationButton.setAttribute("disabled", "");


// 전체동의 함수
function selectAllFunction (target) {
  if (target.previousElementSibling.checked) {
    tos.checked = false;
    privacy.checked = false;
    marketing.checked = false;
  } else {
    tos.checked = true;
    privacy.checked = true;
    marketing.checked = true;
  }
}

// '동의' 버튼 활성화 함수
function agreementButtonActive () {
  if (tos.checked && privacy.checked && age14.checked) {
    agreementButton.classList.add("agreement-active");
    agreementButton.removeAttribute("disabled", "");
  } else {
    agreementButton.classList.remove("agreement-active");
    agreementButton.setAttribute("disabled", "");
  }
}

// '동의' 버튼 클릭 함수
// Article - lezhin-article-authentication 출력
function buttonFunction (target) {
  if (target.value === "agreement") {
    articleAgreement.classList.add("inactive");
    articleAuthentication.classList.remove("inactive");
  } else if (target.value === "next") {
    articleAuthentication.classList.add("inactive");
    articlePrivacy.classList.remove("inactive");
  } else if (target.value === "send-email") {
    sendEmailButton.classList.add("inactive");
    resendEmailButton.classList.remove("inactive");
    authenticationNumber.classList.remove("inactive");

    document.querySelectorAll(".form-input-message")[1].style.display = "none";
    document.querySelectorAll(".form-input-message")[3].style.display = "block";

    window.setTimeout(function () {
      resendEmailButton.removeAttribute("disabled", "");
      resendEmailButton.classList.add("resend-email-active");
    }, 60000);
  }

}

// input[type=text] 포커스 이벤트  함수
let currentInputTextStatus = 0;
function inputFocus (target) {
  target.nextElementSibling.classList.add("signup-form-input-text-active");
  document.querySelectorAll(".form-input-message")[0].style.display = "none";
  document.querySelectorAll(".form-input-message")[1].style.display = "block";
}

function focusout () {
  inputEmail.addEventListener('focusout', (event) => {
    sendEmailButton.classList.add("agreement-active");
  });
}

function inputNumberFunction () {
  if (inputNumber.value.length === 6) {
    finishAuthenticationButton.removeAttribute("disabled", "");
    finishAuthenticationButton.classList.add("agreement-active");
  }
}

function selectAllHandler (e) {
  if (e.target.htmlFor === "all") {
    selectAllFunction(e.target);
  } else if (e.target.tagName === "BUTTON") {
    buttonFunction(e.target);
  } else if (e.target.className === "signup-form-input-text") {
    inputFocus(e.target);
  }
  agreementButtonActive();
  focusout();
  inputNumberFunction();
}

form.addEventListener("click", selectAllHandler);

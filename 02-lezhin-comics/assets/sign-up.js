// 약관동의 이벤트
// -'전체동의' 선택하면 이용약관/개인정보/마케팅 체크박스 동시 선택
// -필수요소 모두 선택하면 '동의'버튼 활성화
const form = document.querySelector(".agreement-form-fieldset");
const tos = document.querySelector("#ToS");
const privacy = document.querySelector("#privacy");
const marketing = document.querySelector("#marketing");
const age14 = document.querySelector("#age-14");
const agreementButton = document.querySelector(".sign-up-agreement");

agreementButton.setAttribute("disabled", "");

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

// '동의' 버튼 활성화
function agreementButtonActive () {
  if (tos.checked && privacy.checked && age14.checked) {
    agreementButton.classList.add("agreement-active");
    agreementButton.removeAttribute("disabled", "");
  } else {
    agreementButton.classList.remove("agreement-active");
    agreementButton.setAttribute("disabled", "");
  }
}

function selectAllHandler (e) {
  if (e.target.htmlFor === "all") {
    selectAllFunction(e.target);
  }
  agreementButtonActive();
}

form.addEventListener("click", selectAllHandler);

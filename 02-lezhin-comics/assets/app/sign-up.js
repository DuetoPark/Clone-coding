const acceptTermsForm = document.acceptTermsForm;
const agreeAll = acceptTermsForm.agreeAll;
const agreeButton = acceptTermsForm.agree;
let count = 0;

function handleAgreeAll() {
  const inputs = acceptTermsForm.querySelectorAll('input');
  if (this.checked) {
    inputs.forEach(input => input.checked = true);
    agreeButton.classList.add('button-active');
    agreeButton.setAttribute('tabindex', 0);
  } else {
    inputs.forEach(input => input.checked = false);
    agreeButton.classList.remove('button-active');
    agreeButton.setAttribute('tabindex', -1);
  }
}

function handleChange(e) {
  const isChecked = Boolean(e.target.dataset.checked);
  if (e.target.dataset.type === "required") {
    if (!isChecked) {
      e.target.dataset.checked = 'true';
      count++;
    } else {
      e.target.dataset.checked = '';
      count--;
    }

    if (count === 3) {
      agreeButton.classList.add('button-active');
      agreeButton.setAttribute('tabindex', 0);
    } else {
      agreeButton.classList.remove('button-active');
      agreeButton.setAttribute('tabindex', -1);
    }
  }
}

function handleAgreeButton() {
  acceptTermsForm.classList.add('hidden');
}

agreeAll.addEventListener('change', handleAgreeAll);
acceptTermsForm.addEventListener('change', handleChange);
agreeButton.addEventListener('click', handleAgreeButton);




const emailForm = document.emailForm;
const emailInput = emailForm.email;
const emailLabel = emailForm.querySelector('.label-strong.email');
const info = Array.from(emailForm.querySelectorAll('.info > p'));
const emailSendButton = emailForm.sendEmail;

function changeMessage(currentInputState, info) {
  if (!info.classList.contains('hidden')) {
    info.classList.add('hidden');
  }
  if (info.classList.contains(currentInputState)) {
    info.classList.remove('hidden');
  }

  emailSendButton.classList.remove('button-active');
}

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
// License: Stackoverflow (https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript);

function handleValidation() {
  const inputState = this.dataset.state;
  if (!this.value) { // input이 비었을 때
    this.dataset.state = "no-input";
    emailLabel.classList.toggle('focus');
    info.forEach(info => changeMessage('no-input', info));
    emailSendButton.setAttribute('tabindex', -1);
  } else if (this.value) { // input에 값을 넣었을 때
    if (!validateEmail(this.value)) { // 이메일 주소가 부정확할 때
      this.dataset.state = "error";
      info.forEach(info => changeMessage('error', info));
      emailSendButton.setAttribute('tabindex', -1);
    } else { // 이메일 주소가 정확할 때
      this.dataset.state = "send";
      info.forEach(info => changeMessage('send', info));
      emailSendButton.classList.add('button-active');
      emailSendButton.setAttribute('tabindex', 0);
    }
  }
}

function sendEmail() {
  const reSendButton =  emailForm.reSend;
  // 메일 보내는 라이브러리+코드
  this.classList.remove('button-active');
  setTimeout(() => {
    this.style.display = 'none';
  }, 500);

  reSendButton.classList.remove('hidden');
  setTimeout(() => {
    reSendButton.classList.add('active');
  }, 10000);
}

emailInput.addEventListener('focusin', handleValidation);
emailInput.addEventListener('focusout', handleValidation);
emailInput.addEventListener('change', handleValidation, {once: true});
emailSendButton.addEventListener('click', sendEmail);




const reSendButton = emailForm.reSend;

function resendEmail() {

}

reSendButton.addEventListener('click', resendEmail);

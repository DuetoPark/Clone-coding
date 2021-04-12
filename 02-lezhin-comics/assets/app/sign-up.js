const acceptTermsForm = document.acceptTermsForm;
const agreeAll = acceptTermsForm.agreeAll;
const agreeButton = acceptTermsForm.agree;
let count = 0;

function handleAgreeAll() {
  const inputs = form.querySelectorAll('input');
  if (this.checked) {
    inputs.forEach(input => input.checked = true);
    agreeButton.classList.add('button-active');
  } else {
    inputs.forEach(input => input.checked = false);
    agreeButton.classList.remove('button-active');
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
    } else {
      agreeButton.classList.remove('button-active');
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
const emailLabel = emailForm.querySelector('.email-label');

function handleMouseDown() {
  const isEmpty = Boolean(this.dataset.empty);
  if (!this.value && isEmpty) {
    emailLabel.classList.toggle('focus');
  } else if (this.value) {
    this.dataset.empty = "";
    return;
  }
}

emailInput.addEventListener('focusin', handleMouseDown);
emailInput.addEventListener('focusout', handleMouseDown);

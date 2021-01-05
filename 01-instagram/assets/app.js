window.onload = function() {
function onClick(){
  document.querySelector(".modal-wrap").style.display='block';
  document.querySelector(".black_bg").style.display='block';
};
function offClick(){
  document.querySelector(".modal-wrap").style.display='none';
  document.querySelector(".black_bg").style.display='none';
};

$(".feed-modal-button").click(function () {
    onClick();
  });
document.querySelector('.modal_close').addEventListener('click', offClick);
};


// Account modal Event
let accountButton = document.querySelector('.account-modal-button');
let accountModal = document.querySelector('.account-modal-container');
let accountClose = document.querySelector('button.account.modal_close');

let openModal = function () {
  accountModal.style.display = 'block';
}
function openModalHandler () {
  openModal();
}
accountButton.addEventListener('click', openModalHandler);


let closeModal = function () {
  accountModal.style.display = 'none';
}
function closeModalHandler () {
  closeModal();
}
accountClose.addEventListener('click', closeModalHandler);

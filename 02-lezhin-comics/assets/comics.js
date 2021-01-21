window.addEventListener('DOMContentLoaded', function(){
  const likeCheckbox = document.querySelector("#like");
  const likeLabel = document.querySelector("#like + label");
  const dislikeCheckbox = document.querySelector("#dislike");
  const dislikeLabel = document.querySelector("#dislike + label");

  function dislikeLabelInactive () {
    if (likeCheckbox.checked) {
      if(dislikeCheckbox.checked){
        dislikeCheckbox.checked = false;
        likeLabel.classList.add("like-label-checked");
        likeLabel.classList.remove("like-label-inactive");
        dislikeLabel.classList.remove("dislike-label-checked");
        dislikeLabel.classList.add("dislike-label-inactive");
      }
      likeLabel.classList.add("like-label-checked");
      likeLabel.classList.remove("like-label");
      dislikeLabel.classList.remove("dislike-label");
      dislikeLabel.classList.add("dislike-label-inactive");
    } else {
      likeLabel.classList.remove("like-label-checked");
      likeLabel.classList.add("like-label");
      dislikeLabel.classList.add("dislike-label");
      dislikeLabel.classList.remove("dislike-label-inactive");
    }
  }

  function likeLabelInactive () {
    if (dislikeCheckbox.checked) {
      if(likeCheckbox.checked){
        likeCheckbox.checked = false;
        dislikeLabel.classList.remove("dislike-label-inactive");
        dislikeLabel.classList.add("dislike-label-checked");
        likeLabel.classList.remove("like-label-checked");
        likeLabel.classList.add("like-label-inactive");
      }
      dislikeLabel.classList.remove("dislike-label");
      dislikeLabel.classList.add("dislike-label-checked");
      likeLabel.classList.remove("like-label");
      likeLabel.classList.add("like-label-inactive");
    } else {
      dislikeLabel.classList.add("dislike-label");
      dislikeLabel.classList.remove("dislike-label-checked");
      likeLabel.classList.add("like-label");
      likeLabel.classList.remove("like-label-inactive");
    }
  }

  function voteHandler(e) {
    if (e.target.id === "like") {
      dislikeLabelInactive();
    } else if (e.target.id === "dislike") {
      likeLabelInactive();
    }
  }

  likeCheckbox.addEventListener("change", voteHandler);
  dislikeCheckbox.addEventListener("change", voteHandler);
});

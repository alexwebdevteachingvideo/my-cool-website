let numberOfLikes = 0;

function onLikeButtonClick() {
  const likeButton = document.querySelector("#like-button");

  numberOfLikes = numberOfLikes + 1;

  if (likeButton !== null) {
    likeButton.innerHTML = "👍 " + numberOfLikes;
  }
}

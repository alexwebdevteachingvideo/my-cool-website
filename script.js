const savedLikes = localStorage.getItem('likes');

let numberOfLikes = 0;

if (savedLikes === null) {
  // do nothing
} else if (typeof savedLikes === "string") {
  numberOfLikes = Number(savedLikes);
}

const button = document.querySelector("#like-button");
if (button !== null) {
  button.innerHTML = "👍 " + numberOfLikes;
}

function onLikeButtonClick() {
  const likeButton = document.querySelector("#like-button");

  numberOfLikes = numberOfLikes + 1;
  localStorage.setItem('likes', numberOfLikes);

  if (likeButton !== null) {
    likeButton.innerHTML = "👍 " + numberOfLikes;
  }
}

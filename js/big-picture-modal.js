const ESCAPE_KEY = 27;

const modalWindow = document.querySelector(".big-picture");
const bigImageElement = document.querySelector(".big-picture__img").children[0];
const likesCount = document.querySelector(".likes-count");
const commentsCount = document.querySelector(".comments-count");
const socialCommentList = document.querySelector(".social__comments");
const socialCommentListItem = document.querySelector(".social__comment");
const photoDescription = document.querySelector(".social__header");
const socialCaption = document.querySelector(".social__caption");

const onEscClose = (evt) => {
  if (evt.keyCode === ESCAPE_KEY) {
    evt.preventDefault();
    closeModal();
  }
};

const bodyScrollOn = () => {
  document.body.classList.add("modal-open");
};

const bodyScrollOff = () => {
  document.body.classList.remove("modal-open");
};

const openModal = () => {
  modalWindow.classList.remove("hidden");
  bodyScrollOn();
};

function closeModal() {
  modalWindow.classList.add("hidden");
  bodyScrollOff();
  document.body.removeEventListener("keydown", onEscClose);
}

const createSocialComments = (comments) => {
  console.log(comments);
  socialCommentList.textContent = "";
  comments.forEach((element) => {
    const commentItem = socialCommentListItem.cloneNode(true);
    commentItem.querySelector(".social__picture").src = element.avatar;
    commentItem.querySelector(".social__picture").alt = element.name;
    commentItem.querySelector(".social__text").textContent = element.message;
    socialCommentList.append(commentItem);
  });
};

const hideCommentNodes = () => {
  document.querySelector(".social__comment-count").classList.add("hidden");
  document.querySelector(".comments-loader").classList.add("hidden");
};

const openBigPicture = (data) => {
  bigImageElement.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  socialCaption.textContent = data.description;
  createSocialComments(data.comments);
  document.body.addEventListener("keydown", onEscClose);
  openModal();
  hideCommentNodes();
};

export { openBigPicture, closeModal };

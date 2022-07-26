

const modalWindow = document.querySelector('.big-picture');
const socialCommentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const getComment =  ({avatar, name, message}) => {
const socialCommentElement = socialComment.cloneNode(true);
socialCommentElement.querySelector('.social__picture').src = avatar;
socialCommentElement.querySelector('.social__picture').alt = name;
socialCommentElement.querySelector('.social__text').textContent = message;
return socialCommentElement;
};



const getBigPictureData = ({url, likes, comments, description}) => {
  bigPictureImg.querySelector('.big-picture__img').src = url;
  bigPictureImg.querySelector('.likes-count').textContent = likes;
  bigPictureImg.querySelector('.comments-count').textContent = comments.length;
  bigPictureImg.querySelector('.social__caption').textContent = description;
  addComments ();
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};


const addComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    commentFragment.append(getComment ({avatar, name, message}))
  });
};



export const console = function () {.addEventListener('click', function (evt) {
  console.log(1);
  console.log(evt);
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
});
};

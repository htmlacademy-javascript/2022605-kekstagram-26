import {createPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture').content;
const userPuctureElement = userPictureTemplate.querySelector('.picture');

const userPicture = createPhotos();

userPicture.forEach(({url, likes, comments}) => {
const userElement = userPuctureElement.cloneNode(true);
userElement.querySelector('.picture__img').setAttribute('src', url);
userElement.querySelector('.picture__likes').textContent = likes;
userElement.querySelector('.picture__comments').textContent = comments.length;
picturesContainer.appendChild(userElement);
});

export {picturesContainer};

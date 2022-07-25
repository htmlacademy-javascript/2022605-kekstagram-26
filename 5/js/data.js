import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const NAMES = ['Иван', 'Сергей', 'Генадий', 'Сидоджи', 'Рик', 'Морти', 'Зена', 'Небула', 'Моника', 'Хлоя', 'Вова Вист',];
const DESCRIPTIONS = ['Синее море', 'Зеленый лес', 'Черная дыра', 'Белые горы', 'Желтое поле', 'Серые будни', 'Розовый закат', 'Оранжевый кирпич',];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_AMOUNT = 25;


const makePhoto = (id, url,description, likes, comments) => ({
  id,
  url,
  description,
  likes,
  comments: {
    id,
    avatar,
    message,
    name,
  }
});

let commentIdCounter = 1;

const createPhotoComments = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name:  getRandomArrayElement(NAMES),
})

const makePhotos = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: 2}, createPhotoComments)
    });
  }
  return photos;
}

const createPhotos = () => makePhotos(PHOTOS_AMOUNT);
export {createPhotos};

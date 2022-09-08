function checkCommentLength(line, maxLenght) {
  if (line.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
}


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Проверка клавиши ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger};
export {getRandomArrayElement};
export {isEscapeKey};

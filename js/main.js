function getRandomIntInclusive(min, max) {
  if (min >= max) {
    console.log('Задано некорректное максимальное значение. Оно должно быть больше минимального');
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(0, 15);

function checkCommentLength(line, maxLenght) {
  if (line.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
}
checkCommentLength('12', 140);

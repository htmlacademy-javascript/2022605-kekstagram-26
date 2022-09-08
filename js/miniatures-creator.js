import { closeModal, openBigPicture } from "./big-picture-modal.js";

const picturesContainer = document.querySelector(".pictures");
const userPictureTemplate = document.querySelector("#picture").content;



const generateMiniatures = (generatedData) => {
  generatedData.forEach((item) => {
    const pictureElement = userPictureTemplate.cloneNode(true);
    const miniImg = pictureElement.querySelector(".picture__img");
    const closeModalButton = document.querySelector('#picture-cancel');
    miniImg.src = item.url;
    pictureElement.querySelector(".picture__likes").textContent = item.likes;
    pictureElement.querySelector(".picture__comments").textContent = item.comments.length;
    picturesContainer.appendChild(pictureElement);
    miniImg.addEventListener("click", () => {
        openBigPicture(item);
    });
    closeModalButton.addEventListener('click', closeModal)

  });
};

export { generateMiniatures };

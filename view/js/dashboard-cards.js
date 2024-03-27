import { petEditModal } from '../js/dashboard-modal.js'
import { elements } from '../js/elements.js'

const randomInt = Math.floor(Math.random() * 5 + 1);

const createCards = (pet) => {
  const $card = document.createElement("div");
  const $cardImage = document.createElement("div");
  const $cardTitle = document.createElement("h4");
  const $cardSubtitle = document.createElement("p");
  const $cardSpeciality = document.createElement("p");
  const $cardActions = document.createElement("div");
  const $cardEditButton = document.createElement("button");
  const $cardDeleteButton = document.createElement("button");

  $card.classList.add("pet-card");
  $cardImage.classList.add("image-card");
  $cardTitle.classList.add("title-card");
  $cardSubtitle.classList.add("subtitle-card");
  $cardSpeciality.classList.add("speciality-card");
  $cardActions.classList.add("buttons-card");
  $cardEditButton.classList.add("edit-button-card");
  $cardDeleteButton.classList.add("delete-button-card");

  switch (pet.breed) {
    case "Cachorro":
      $cardImage.style.backgroundImage = `url("./assets/dashboard/dashboard-cards/images/cachorro${randomInt}.jpg")`;
      break;
    case "Gato":
      $cardImage.style.backgroundImage = `url("./assets/dashboard/dashboard-cards/images/gato${randomInt}.jpg")`;
      break;
    case "Silvestre":
      $cardImage.style.backgroundImage = `url("./assets/dashboard/dashboard-cards/images/coelho${randomInt}.jpg")`;
      break;
  }

  $cardTitle.innerText = pet.name;
  $cardSubtitle.innerText = pet.breed;
  $cardSpeciality.innerText = pet.speciality;
  $cardEditButton.value = "editar";
  $cardEditButton.innerText = "Editar";
  $cardDeleteButton.value = "deletar";
  $cardDeleteButton.innerText = "Deletar";

  $cardEditButton.addEventListener("click", () => {
    petEditModal(pet.id);
  });
  $cardDeleteButton.addEventListener("click", () => {
    deletePet(pet);
  });

  $card.appendChild($cardImage);
  $card.appendChild($cardTitle);
  $card.appendChild($cardSubtitle);
  $card.appendChild($cardSpeciality);
  $cardActions.appendChild($cardEditButton);
  $cardEditButton.appendChild($cardDeleteButton);
  $card.appendChild($cardActions);
  elements.dashboard.$container.appendChild($cardEditButton);
};

export { createCards }
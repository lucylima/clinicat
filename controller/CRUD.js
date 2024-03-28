import {
  getLocalStorage,
  readLocalStorage,
  setLocalStorage,
} from "../model/Database.js";
import { createCards } from "../view/js/dashboard-cards.js";

const createNewPet = (pet) => {
  const database = getLocalStorage();
  database.push(pet);
  setLocalStorage(database);
};

const deletePet = (pet) => {
  let confirmAction = confirm("Deseja realmente deletar esse pet?");
  if (confirmAction) {
    const database = readLocalStorage();
    let index = database.findIndex((item) => item.id == pet.id);
    database.splice(index, 1);
    setLocalStorage(database);
  }
  updateCards();
};

const editPet = (pet) => {
  const database = readLocalStorage();
  let index = database.findIndex((item) => item.id === pet.id);
  console.log(index);
  database[index] = pet;
  setLocalStorage(database);
  updateCards();
};

const updateCards = () => {
  const database = readLocalStorage();
  const cards = document.querySelectorAll(".pet-card");
  for (let card of cards) card.parentNode.removeChild(card);
  database.forEach(createCards);
};

export { createNewPet, deletePet, editPet, updateCards };

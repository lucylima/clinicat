import { petRegisterModal } from "../view/js/dashboard-modal.js";
import {
  getLocalStorage,
  readLocalStorage,
  setLocalStorage,
} from "../model/Database.js";
import { createCards } from "../view/js/dashboard-cards.js";
import { updateCards } from "./CRUD.js";
import { elements } from "../view/js/elements.js";

for (let item of elements.dashboard.$newPetButtons)
  item.addEventListener("click", () => {
    petRegisterModal();
  });

for (let item of elements.dashboard.$menu) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "inicio":
        elements.dashboard.$menuTitle.innerHTML = "Início";
        break;
    }
  });
}

updateCards();

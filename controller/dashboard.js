import { petRegisterModal } from "../view/js/dashboard-modal.js";
import { updateCards } from "./CRUD.js";
import { elements } from "../view/js/elements.js";
import { readLocalStorage } from "../model/Database.js";

const noItems = () => {
  let storage = localStorage.getItem("database_clinicat_pets");
  storage
    ? elements.dashboard.$noItems.classList.add("none")
    : elements.dashboard.$noItems.classList.remove("none");
};

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
noItems();
updateCards();

export { noItems };

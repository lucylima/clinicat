import { petRegisterModal } from "../view/js/dashboard-modal.js"
import { updateCards } from "../controller/pet.controller.js"
import { elements } from "../view/js/elements.js"

const noItems = () => {
  let storage = localStorage.getItem("database_clinicat_pets")
  if(storage){
    elements.dashboard.$noItems.classList.add("none")
    elements.dashboard.$container.classList.remove('none')
  } else {
    elements.dashboard.$noItems.classList.remove("none")
    elements.dashboard.$container.classList.add('none')
  }
}

for (let item of elements.dashboard.$newPetButtons)
  item.addEventListener("click", () => {
    petRegisterModal()
  })

for (let item of elements.dashboard.$menu) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "inicio":
        elements.dashboard.$menuTitle.innerHTML = "Início"
        break
    }
  })
}

noItems()
updateCards()

export { noItems }

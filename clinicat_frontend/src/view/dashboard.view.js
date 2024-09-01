import { addSidebarOptions } from './components/SidebarTabs.js'
import { dashboard } from './elements.js'
const noItems = () => {
  let storage = localStorage.getItem("database_clinicat_pets")
  if(storage){
    dashboard.$noItems.classList.add("none")
    dashboard.$container.classList.remove('none')
  } else {
    dashboard.$noItems.classList.remove("none")
    dashboard.$container.classList.add('none')
  }
}

for (let item of dashboard.$newPetButtons)
  item.addEventListener("click", () => {
    petRegisterModal()
  })

for (let item of dashboard.$menu) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "inicio":
        dashboard.$menuTitle.innerHTML = "Início"
        break
    }
  })
}

addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxl-steam' })

import { renderPetCards } from './pet.view.js'
import { addSidebarOptions } from './components/SidebarTabs.js'
import { dashboard, modal } from './elements.js'

for (let item of dashboard.$newPetButtons) item.onclick = modal.show
modal.$closeModal.onclick = modal.close
window.onclick = (event) => {
  if (event.target == modal.$modal) modal.close()
}

addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Pets', id: 'pets', icon: 'bx bxs-heart' })
addSidebarOptions({
  text: 'Consultas',
  id: 'appointments',
  icon: 'bx bx-list-ul'
})
addSidebarOptions({ text: 'Configurações', id: 'settings', icon: 'bx bxs-cog' })

renderPetCards()
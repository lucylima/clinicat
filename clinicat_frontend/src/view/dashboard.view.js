import { addSidebarOptions } from './components/SidebarTabs.js'
import { dashboard, modal, modalForm } from './elements.js'

dashboard.$container.classList.remove('none')

for (let item of dashboard.$newPetButtons) item.onclick = modal.show
modal.$closeModal.onclick = modal.close
window.onclick = (event) => {
  if (event.target == modal.$modal) modal.close()
}

addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxl-steam' })

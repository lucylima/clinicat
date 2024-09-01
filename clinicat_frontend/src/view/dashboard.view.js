import { addSidebarOptions } from './components/SidebarTabs.js'
import { dashboard, modal } from './elements.js'

dashboard.$noItems.classList.remove('none')
dashboard.$container.classList.add('none')

for (let item of dashboard.$newPetButtons) {
  item.addEventListener('click', modal.show)
}

modal.$closeModal.onclick = () => modal.close()
window.onclick = event => { if (event.target == modal.$modal) modal.close() }



addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxs-home' })
addSidebarOptions({ text: 'Início', id: 'home', icon: 'bx bxl-steam' })

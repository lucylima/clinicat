import { dashboard } from '../elements'

const addSidebarOptions = (menu) => {
  const { text, id, icon } = menu
  const $sidebar = dashboard.sidebar.$menu
  const $menuOption = document.createElement('li')
  const $icon = document.createElement('i')
  const $tabName = document.createElement('span')

  $menuOption.className = 'menu-option'
  $menuOption.id = id
  $icon.className = icon
  $tabName.textContent = text
  
  $menuOption.appendChild($icon)
  $menuOption.appendChild($tabName)
  $sidebar.appendChild($menuOption)
}

for (let item of dashboard.$menu) {
  item.addEventListener("click", () => {
    switch (item.id) {
      case "inicio":
        dashboard.$menuTitle.innerHTML = "Início"
        break
    }
  })
}

export { addSidebarOptions }
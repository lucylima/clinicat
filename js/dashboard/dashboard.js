import { showModal } from './dashboard-modal.js'
import { createCards } from './dashboard-cards.js'
import { $submitForm } from './dashboard-cadastro.js'

const setLocalStorage = (database) => localStorage.setItem("banco_clinicat_pets", JSON.stringify(database))
const getLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_pets')) ?? []
const readLocalStorage = () => getLocalStorage()

const $container = document.getElementsByClassName('container-principal')[0]
const $noItems = document.getElementsByClassName('sem-items')[0]
const $menu = document.getElementsByClassName('menu-opcao')
const $menuTitle = document.getElementsByClassName('categoria-menu')[0]
const $newPetButtons = document.getElementsByClassName('adicionar-novo')

const createNewPet = (pet) => {
  const database = getLocalStorage()
  database.push(pet)
  setLocalStorage(database)
}

const deletePet = (pet) => {
  let certeza = confirm('Deseja realmente deletar esse pet?')
  if (certeza) {
    const database = readLocalStorage()
    let index = database.findIndex((item) => item.id == pet.id)
    database.splice(index, 1)
    setLocalStorage(database)
  }
  updateCards()
}

const editPet = (pet) => {
  const database = readLocalStorage()
  let index = database.findIndex(item => item.id === pet.id);
  console.log(index)
  database[index] = pet
  setLocalStorage(database)
  updateCards()
}

const updateCards = () => {
  const database = readLocalStorage()
  const cards = document.querySelectorAll('.cardPet')
  for (let card of cards) card.parentNode.removeChild(card)
  database.forEach(createCards)
}

const alertaSemItens = (modo) => {
  if (modo === 'mostrar') {
    $semItems.classList.remove('none')
  } else if (modo === 'esconder') {
    $semItems.classList.add('none')
  }
}

for (let item of $adicionarNovo) item.addEventListener('click', () => {
  $submitForm.value = 'Cadastrar'
  showModal()
})

for (let item of $menu) {
  item.addEventListener('click', () => {
    switch (item.id) {
      case 'inicio':
        $menuTitle.innerHTML = 'Início'
        break;
    }
  })
}

updateCards()

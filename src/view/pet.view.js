import { readLocalStorage } from '../../model/Database.js'
import { elements } from './elements.js'
import { createPet } from '../../controller/petController.js'
import { createNewPet, updateCards, editPet } from '../controller/pet.controller.js'
import { noItems } from './dashboard.js'

let id

const petEditModal = (pet) => {
  id = pet.id
  elements.modalForm.$petNameField.value = pet.petName
  elements.modalForm.$petOwnerField.value = pet.petOwner
  elements.modalForm.$specialitySelect.value = pet.speciality
  for (let radio of elements.modalForm.$animalType) {
    if (pet.breed == radio.value) {
      radio.checked = true
    }
  }
  elements.modalForm.$submitFormButton.value = 'Atualizar pet'
  showModal()
}

const petRegisterModal = () => {
  showModal()
  elements.modalForm.$submitFormButton.value = 'Cadastrar'
}

const submitRegister = () => {
  const database = readLocalStorage()
  let selectedRadio
  for (let radio of elements.modalForm.$animalType)
    if (radio.checked) {
      selectedRadio = radio.value
    }
  let pet = createPet(
    database.length + 1,
    elements.modalForm.$petNameField.value,
    selectedRadio,
    elements.modalForm.$specialitySelect.value,
    elements.modalForm.$petOwnerField.value
  )
  createNewPet(pet)
  updateCards()
  closeModal()
  Toastify({
    text: 'Pet registrado com sucesso!',
    duration: 3000,
    style: {
      background:
        'linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)',
    },
    gravity: "bottom", 
    position: "right"
  }).showToast()
  noItems()
}

const submitEdit = () => {
  let selectedRadio
  for (let radio of elements.modalForm.$animalType)
  if (radio.checked) {
    selectedRadio = radio.value
  }
  const overwritePet = createPet(
    id,
    elements.modalForm.$petNameField.value,
    selectedRadio,
    elements.modalForm.$specialitySelect.value,
    elements.modalForm.$petOwnerField.value
  )
  editPet(overwritePet)
  updateCards()
  closeModal()
  Toastify({
    text: 'Pet editado com sucesso!',
    duration: 3000,
    style: {
      background:
        'linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)',
    },
    gravity: "bottom", 
    position: "right"
  }).showToast()
}

elements.modalForm.$formPet.addEventListener('submit', (e) => {
  e.preventDefault()
  switch (elements.modalForm.$submitFormButton.value) {
    case 'Atualizar pet':
      submitEdit()
      break
    case 'Cadastrar':
      submitRegister()
      break
  }
})

elements.modal.$closeModal.onclick = () => closeModal()
window.onclick = (event) => {
  if (event.target == elements.modal.$modal) closeModal()
}

export { showModal, closeModal, petRegisterModal, petEditModal }

import { petEditModal } from '../js/dashboard-modal.js'
import { elements } from '../js/elements.js'
import { deletePet } from '../controller/pet.controller.js'

const randomInt = Math.floor(Math.random() * 5 + 1)

const createCards = (pet) => {
  const $card = document.createElement('div')
  const $cardImage = document.createElement('div')
  const $cardTitle = document.createElement('h4')
  const $cardSubtitle = document.createElement('p')
  const $cardSpeciality = document.createElement('p')
  const $cardActions = document.createElement('div')
  const $cardEditButton = document.createElement('button')
  const $cardDeleteButton = document.createElement('button')

  $card.classList.add('pet-card')
  $cardImage.classList.add('image-card')
  $cardTitle.classList.add('title-card')
  $cardSubtitle.classList.add('subtitle-card')
  $cardSpeciality.classList.add('speciality-card')
  $cardActions.classList.add('buttons-card')
  $cardEditButton.classList.add('edit-button-card')
  $cardDeleteButton.classList.add('delete-button-card')

  switch (pet.breed) {
    case 'Cachorro':
      $cardImage.style.backgroundImage = `url("../assets/dashboard/dashboard-cards/images/cachorro${randomInt}.jpg")`
      break
    case 'Gato':
      $cardImage.style.backgroundImage = `url("../assets/dashboard/dashboard-cards/images/gato${randomInt}.jpg")`
      break
    case 'Silvestre':
      $cardImage.style.backgroundImage = `url("../assets/dashboard/dashboard-cards/images/coelho${randomInt}.jpg")`
      break
  }

  $cardTitle.innerText = pet.petName
  $cardSubtitle.innerText = pet.breed
  $cardSpeciality.innerText = pet.speciality
  $cardEditButton.value = 'editar'
  $cardEditButton.innerText = 'Editar'
  $cardDeleteButton.value = 'deletar'
  $cardDeleteButton.innerText = 'Deletar'

  $cardEditButton.addEventListener('click', () => {
    petEditModal(pet)
  })
  $cardDeleteButton.addEventListener('click', () => {
    deletePet(pet)
  })

  $card.appendChild($cardImage)
  $card.appendChild($cardTitle)
  $card.appendChild($cardSubtitle)
  $card.appendChild($cardSpeciality)
  $cardActions.appendChild($cardEditButton)
  $cardActions.appendChild($cardDeleteButton)
  $card.appendChild($cardActions)
  elements.dashboard.$container.appendChild($card)
}

export { createCards }

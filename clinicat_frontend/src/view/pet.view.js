import axios from 'axios'

const petAxios = axios.create({
  baseURL: 'http://localhost:3000/pet'
})

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
  elements.modalForm.$submitFormButton.value = 'Editar pet'
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
        'linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)'
    },
    gravity: 'bottom',
    position: 'right'
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
        'linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)'
    },
    gravity: 'bottom',
    position: 'right'
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

const renderPetCards = async () => {
  const pets = await petAxios().then((response) => {
    return response.data.petList
  })
  const cards = document.querySelectorAll('.pet-card')
  for (let card of cards) card.parentNode.removeChild(card)
  pets.forEach((pet) => {
    createPetCard(pet)
  })
}

export { openNewPetModal, renderPetCards }

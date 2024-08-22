export const elements = {
  dashboard: {
    $container: document.getElementsByClassName('card-container')[0],
    $noItems: document.getElementsByClassName('no-items')[0],
    $menu: document.getElementsByClassName('menu-option'),
    $menuTitle: document.getElementsByClassName('menu-category')[0],
    $newPetButtons: document.getElementsByClassName('add-new')
  },
  modal: {
    $modal: document.getElementsByClassName('modal')[0],
    $closeModal: document.getElementsByClassName('modal-x')[0],
    showModal: () => (elements.modal.$modal.style.display = 'block'),
    closeModal: () => {
      elements.modalForm.clearModalForm()
      elements.modal.$modal.style.display = 'none'
    }
  },
  modalForm: {
    $formPet: document.getElementsByClassName('form')[0],
    $animalType: document.getElementsByClassName('input-radio-animal'),
    $specialitySelect: document.getElementById('doctor-speciality'),
    $petOwnerField: document.getElementsByClassName('petOwnerField')[0],
    $petNameField: document.getElementsByClassName('petNameField')[0],
    $submitFormButton: document.getElementsByClassName('button-submit-pet')[0],
    clearModalForm: () => {
      elements.modalForm.$petNameField.value = ''
      elements.modalForm.$petOwnerField.value = ''
      elements.modalForm.$specialitySelect.value = ''
      for (let radio of elements.modalForm.$animalType) radio.checked = false
    }
  },
  register: {
    $nameField: document.getElementById('nameField'),
    $emailField: document.getElementById('emailField'),
    $passwordField: document.getElementById('passwordField'),
    $form: document.getElementsByClassName('form-register')[0],
    clearRegisterForm: () => {}
  },
  login: {
    $formLogin: document.getElementsByClassName('form')[0],
    $userField: document.getElementById('user'),
    $passwordField: document.getElementById('password'),
    clearLoginForm: () => {}
  }
}

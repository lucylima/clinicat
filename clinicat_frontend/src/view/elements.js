const dashboard = {
  $container: document.getElementsByClassName('card-container')[0],
  $menu: document.getElementsByClassName('menu-option'),
  $menuTitle: document.getElementsByClassName('menu-category')[0],
  $newPetButtons: document.getElementsByClassName('add-new'),
  sidebar: {
    $menu: document.getElementsByClassName('menu')[0],
    $tabs: document.getElementsByClassName('menu-option'),
  }
}
const modal = {
  $modal: document.getElementsByClassName('modal')[0],
  $closeModal: document.getElementsByClassName('modal-x')[0],
  show: () => (modal.$modal.style.display = 'block'),
  close: () => {
    modalForm.clearModalForm()
    modal.$modal.style.display = 'none'
  }
}
const modalForm = {
  $formPet: document.getElementsByClassName('form')[0],
  $animalType: document.getElementsByClassName('input-radio-animal'),
  $specialitySelect: document.getElementById('doctor-speciality'),
  $petOwnerField: document.getElementsByClassName('petOwnerField')[0],
  $petNameField: document.getElementsByClassName('petNameField')[0],
  $submitFormButton: document.getElementsByClassName('button-submit-pet')[0],
  clearModalForm: () => {
    modalForm.$petNameField.value = ''
    modalForm.$petOwnerField.value = ''
    modalForm.$specialitySelect.value = ''
    for (let radio of modalForm.$animalType) radio.checked = false
  }
}
const registerForm = {
  $nameField: document.getElementById('nameField'),
  $emailField: document.getElementById('emailField'),
  $passwordField: document.getElementById('passwordField'),
  $form: document.getElementsByClassName('form-register')[0],
  clearRegisterForm: () => {}
}
const login = {
  $formLogin: document.getElementsByClassName('form')[0],
  $userField: document.getElementById('user'),
  $passwordField: document.getElementById('password'),
  clearLoginForm: () => {}
}

export { dashboard, modal }

export const elements = {
  dashboard: {
    $container: document.getElementsByClassName("main-container")[0],
    $noItems: document.getElementsByClassName("no-items")[0],
    $menu: document.getElementsByClassName("menu-option"),
    $menuTitle: document.getElementsByClassName("menu-category")[0],
    $newPetButtons: document.getElementsByClassName("add-new"),
  },
  modal: {
    $modal: document.getElementsByClassName("modal")[0],
    $closeModal: document.getElementsByClassName("modal-x")[0],
  },
  modalForm: {
    $formPet: document.getElementsByClassName("form")[0],
    $animalType: document.getElementsByClassName("input-radio-animal"),
    $specialitySelect: document.getElementsByClassName("doctor-speaciality")[0],
    $petOwnerField: document.getElementsByClassName("petOwnerField")[0],
    $petNameField: document.getElementsByClassName("petNameField")[0],
    $submitFormButton: document.getElementsByClassName("button-submit-pet")[0],
  },
  register: {
    $nameField: document.getElementById("name"),
    $emailField: document.getElementById("email"),
    $passwordField: document.getElementById("password"),
    $form: document.getElementsByClassName("form-register")[0],
  },
};

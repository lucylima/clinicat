import { readLocalStorage } from "../../model/Database.js";
import { elements } from "./elements.js";
import { createPet } from "../../controller/petController.js";
import { createNewPet } from "../../controller/CRUD.js";

const clearFields = () => {
  elements.modalForm.$petNameField.value = "";
  elements.modalForm.$petOwnerField.value = "";
  elements.modalForm.$specialitySelect.value = "";
  for (let radio of elements.modalForm.$animalType) radio.checked = false;
};

const showModal = () => {
  elements.modal.$modal.style.display = "block";
};

const closeModal = () => {
  clearFields();
  elements.modal.$modal.style.display = "none";
};

const petEditModal = (id) => {
  let selectedRadio;
  const database = readLocalStorage();
  const petInfo = database.find((item) => item.id == id);
  elements.modalForm.$petNameField.value = petInfo.petName;
  elements.modalForm.$petOwnerField.value = petInfo.petOwner;
  elements.modalForm.$specialitySelect.value = petInfo.speciality;
  for (let radio of elements.modal.modalForm.$animalType) {
    if (dadosAntigos.raca == radio.value) {
      radio.checked = true;
    }
  }
  for (let radio of $tipoAnimal)
    if (radio.checked) animalSelecionado = radio.value;
  $enviarForm.value = "Atualizar pet";
  mostrarModal();
};

const petRegisterModal = () => {
  const database = readLocalStorage();
  let selectedRadio;

  for (let radio of $animalType)
    if (radio.checked) {
      selectedRadio = radio.value;
    }

  let pet = createPet(
    database.length + 1,
    $petName.value,
    selectedRadio,
    $speciality.value,
    $petOwner.value
  );

  createNewPet(pet);
  Toastify({
    text: "Pet cadastrado com sucesso!",
    duration: 4000,
    style: {
      background:
        "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    },
  }).showToast();
  $submitForm.value = "Cadastrar";
};

const enviaEdicao = () => {
  const database = lerdatabase();
  const petInfo = database.find((item) => item.id == id);
  let selectedRadio;
  for (let radio of elements.modalForm.$animalType)
    if (radio.checked) selectedRadio = radio.value;
  const overwritePet = createPet(
    petInfo.id,
    elements.modalForm.$petNameField.value,
    selectedRadio,
    elements.modalForm.$specialitySelect.value,
    elements.modalForm.$petOwnerField.value
  );
  editPet(overwritePet);
  closeModal();
  Toastify({
    text: "Pet editado com sucesso!",
    duration: 4000,
    style: {
      background:
        "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    },
  }).showToast();
};

elements.modal.$closeModal.onclick = () => closeModal();
window.onclick = (event) => {
  if (event.target == $modal) closeModal();
};

export { showModal, closeModal, petRegisterModal, petEditModal };

import { readLocalStorage } from "../../model/Database.js";
import { clearFields } from "./dashboard-cadastro.js";

const $modal = document.getElementsByClassName("modal")[0];
const $closeModal = document.getElementsByClassName("modal-x")[0];

const showModal = () => {
  $modal.style.display = "block";
};

const closeModal = () => {
  clearFields();
  $modal.style.display = "none";
};

export const clearFields = () => {
  $nomeTutor.value = "";
  $nomePet.value = "";
  $especialidade.value = "";
  for (let radio of $tipoAnimal) radio.checked = false;
};

const petEditModal = (id) => {
  let sele;
  const banco = lerBanco();
  const dadosAntigos = banco.find((item) => item.id == id);
  $nomePet.value = dadosAntigos.nome;
  $nomeTutor.value = dadosAntigos.dono;
  $especialidade.value = dadosAntigos.especialidade;
  for (let radio of $tipoAnimal) {
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
};

const enviaEdicao = () => {
  const banco = lerBanco();
  const dadosAntigos = banco.find((item) => item.id == id);
  let animalSelecionado;
  for (let radio of $tipoAnimal)
    if (radio.checked) animalSelecionado = radio.value;
  const dadosNovos = new Animal(
    dadosAntigos.id,
    $nomePet.value,
    animalSelecionado,
    $especialidade.value,
    $nomeTutor.value
  );
  editarPet(dadosNovos);
  fecharModal();
  Toastify({
    text: "Pet editado com sucesso!",
    duration: 4000,
    style: {
      background:
        "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    },
  }).showToast();
};

$closeModal.onclick = () => closeModal();
window.onclick = (event) => {
  if (event.target == $modal) closeModal();
};

export { showModal, closeModal };

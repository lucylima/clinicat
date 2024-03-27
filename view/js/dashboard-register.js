const $formPet = document.getElementsByClassName("form")[0];
const $animalType = document.getElementsByClassName("input-radio-animal");
const $speciality = document.getElementsByClassName("speaciality")[0];
const $petOwner = document.getElementById("petOwner");
const $petName = document.getElementById("petName");
const $enviarForm = document.getElementsByClassName("button-submit-pet")[0];

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  if ($enviarForm.value == "Cadastrar") {
    cadastrarPet();
  } else if ($enviarForm.value == "Atualizar pet") {
    enviaEdicao();
  }
  updateCards();
  closeModal();
  alertaSemItens("esconder");
});

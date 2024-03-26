import Pet from "./Pet"
import { createNewPet, updateCards } from "./dashboard"

const $formPet = document.getElementsByClassName('form')[0]
const $animalType = document.getElementsByClassName('input-radio-animal')
const $speciality = document.getElementsByClassName('speaciality')[0]
const $petOwner = document.getElementById('petOwner')
const $petName = document.getElementById('petName')
const $enviarForm = document.getElementsByClassName('button-submit-pet')[0] // export

const showPetRegister = () => {
  let banco = lerBanco()
  let selectedRadio

  for (let radio of $animalType) if (radio.checked) selectedRadio = radio.value

  let novoPet = new Pet(
    banco.length + 1,
    $nomePet.value,
    animalSelecionado,
    $especialidade.value,
    $nomeTutor.value
  )

  createNewPet(novoPet)
  updateCards()
  closeModal()
  Toastify({
    text: "Pet cadastrado com sucesso!",
    duration: 4000,
    style: {
      background: "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    }
  }).showToast();
}

export const exibirEdicao = (id) => {
  let sele
  const banco = lerBanco()
  const dadosAntigos = banco.find(item => item.id == id);
  $nomePet.value = dadosAntigos.nome
  $nomeTutor.value = dadosAntigos.dono
  $especialidade.value = dadosAntigos.especialidade
  for (let radio of $tipoAnimal) {
    if (dadosAntigos.raca == radio.value) {
      radio.checked = true
    }
  }
  for (let radio of $tipoAnimal) if (radio.checked) animalSelecionado = radio.value
  $enviarForm.value = 'Atualizar pet'
  mostrarModal()
}

const enviaEdicao = () => {
  const banco = lerBanco()
  const dadosAntigos = banco.find(item => item.id == id);
  let animalSelecionado
  for (let radio of $tipoAnimal) if (radio.checked) animalSelecionado = radio.value
  const dadosNovos = new Animal(
    dadosAntigos.id,
    $nomePet.value,
    animalSelecionado,
    $especialidade.value,
    $nomeTutor.value
  )
  editarPet(dadosNovos)
  fecharModal()
  Toastify({
    text: "Pet editado com sucesso!",
    duration: 4000,
    style: {
      background: "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    }
  }).showToast();
}

export const clearFields = () => {
  $nomeTutor.value = ''
  $nomePet.value = ''
  $especialidade.value = ''
  for (let radio of $tipoAnimal) radio.checked = false
}

$formularioCadastro.addEventListener('submit', e => {
  e.preventDefault()
  if($enviarForm.value == 'Cadastrar'){
    cadastrarPet()
  }else if($enviarForm.value == 'Atualizar pet'){
    enviaEdicao()
  }
  alertaSemItens('esconder')
})
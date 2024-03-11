import { fecharModal, mostrarModal } from "./dashboard-modal.js"
import { lerBanco, Animal, criaNovoPet, alertaSemItens, atualizarCards, editarPet } from "./dashboard.js"

const $formularioCadastro = document.getElementsByClassName('formulario')[0]
const $tipoAnimal = document.getElementsByClassName('input-radio-animal')
const $especialidade = document.getElementsByClassName('especialidades')[0]
const $nomeTutor = document.getElementById('nome')
const $nomePet = document.getElementById('nomePet')
export const $enviarForm = document.getElementsByClassName('botao-enviar-cadastro')[0]

const cadastrarPet = () => {
  let banco = lerBanco()
  let animalSelecionado

  for (let radio of $tipoAnimal) if (radio.checked) animalSelecionado = radio.value

  let novoPet = new Animal(
    banco.length + 1,
    $nomePet.value,
    animalSelecionado,
    $especialidade.value,
    $nomeTutor.value
  )

  criaNovoPet(novoPet)
  atualizarCards()
  fecharModal()
  Toastify({
    text: "Pet cadastrado com sucesso!",
    duration: 4000,
    style: {
      background: "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    }
  }).showToast();
}

export const exibirEdicao = (id) => {
  const banco = lerBanco()
  const dadosAntigos = banco.find(item => item.id == id);
  $nomePet.value = dadosAntigos.nome
  $nomeTutor.value = dadosAntigos.dono
  for (let radio of $tipoAnimal) {
    if (dadosAntigos.raca == radio.value) {
      radio.checked = true
    }
  }
  $especialidade.value = dadosAntigos.especialidade
  let animalSelecionado
  for (let radio of $tipoAnimal) if (radio.checked) animalSelecionado = radio.value
  const dadosNovos = new Animal(
    dadosAntigos.id,
    $nomePet.value,
    animalSelecionado,
    $especialidade.value,
    $nomeTutor.value
  )
  $enviarForm.value = 'Atualizar pet'
  mostrarModal();
}

export const limparCampos = () => {
  $nomeTutor.value = ''
  $nomePet.value = ''
  $especialidade.value = ''
  for (let radio of $tipoAnimal) radio.checked = false
}

$formularioCadastro.addEventListener('submit', e => {
  e.preventDefault()
  cadastrarPet()
  alertaSemItens('esconder')
})

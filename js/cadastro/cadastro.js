import banco from '../banco-de-dados/banco.js'

const $formularioCadastro = document.getElementsByClassName('formulario')[0]
const $tipoAnimal = document.getElementsByClassName('input-radio-animal')
const $especialidade = document.getElementsByClassName('especialidades')[0]
const $nomeTutor = document.getElementById('nome')
const $nomePet = document.getElementById('nomePet')

class Animal {
  constructor(id, nome, raca, especialidade, dono) {
    this.id = id
    this.nome = nome
    this.raca = raca
    this.especialidade = especialidade
    this.dono = dono
  }
}


$formularioCadastro.addEventListener('submit', e => {
  e.preventDefault()
  let tipoAnimal

  for (let radio of $tipoAnimal) {
    if (radio.checked) {
      tipoAnimal = radio.value
    }
  }

  let novoPet = new Animal(
    1,
    $nomePet.value,
    tipoAnimal,
    $especialidade.value,
    $nomeTutor.value
  )
  banco.pets.push(novoPet)
  console.log(banco)
})

console.log(banco)
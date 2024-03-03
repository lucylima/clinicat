const $formularioCadastro = document.getElementsByClassName('formulario')[0]
const $tipoAnimal = document.getElementsByClassName('input-radio-animal')
const $especialidade = document.getElementsByClassName('especialidades')
const $nomeTutor = document.getElementById('nome')
const $nomePet = document.getElementById('nomePet')

let itens
let id

class Animal {
  constructor(id, nome, raca, especialidade){
    this.id = id
    this.nome = nome
    this.raca = raca
    this.especialidade = especialidade
  }
}

class Usuario {
  constructor(nome, usuario, email, senha, pets){
    this.nome = nome
    this.usuario = usuario
    this.email = email
    this.senha = senha
    this.pets = pets
  }
}

$formularioCadastro.addEventListener('submit', e => {
  e.preventDefault()
  console.log('Deu certo')
})
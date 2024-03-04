const $formularioCadastro = document.getElementsByClassName('formulario')[0]
const $tipoAnimal = document.getElementsByClassName('input-radio-animal') 
const $especialidade = document.getElementsByClassName('especialidades')[0]
const $nomeTutor = document.getElementById('nome')
const $nomePet = document.getElementById('nomePet')

let listaDePets = []

class Animal {
  constructor(id, nome, raca, especialidade, dono){
    this.id = id
    this.nome = nome
    this.raca = raca
    this.especialidade = especialidade
    this.dono = dono
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
  let novoPet = new Animal(
    listaDePets.length + 1,
    $nomePet.value,
    $tipoAnimal.value,
    $especialidade.value,
    $nomeTutor.value
  )
  console.log(novoPet)
})
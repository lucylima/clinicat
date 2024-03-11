const $nome = document.getElementById('nome')
const $email = document.getElementById('email')
const $senha = document.getElementById('senha')
const $formulario = document.getElementsByClassName('formulario-registro')[0]

export class Usuario {
  constructor(nome, email, senha){
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_usuarios", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_usuarios')) ?? []
const lerBanco = () =>  pegarLocalStorage()

const limparCampos = () => {
  $nome.value = ''
  $email.value = ''
  $senha.value = ''
}

$formulario.addEventListener('submit', e => {
  e.preventDefault()
  const banco = lerBanco()
  const novoUsuario = new Usuario(
    $nome.value,
    $email.value,
    $senha.value
  )
  banco.push(novoUsuario)
  definirLocalStorage(banco)
  limparCampos()
  window.location.href = '../index.html'
})

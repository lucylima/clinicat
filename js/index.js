
let $formulario = document.getElementsByClassName('formulario')[0]
let $usuario = document.getElementById('usuario')
let $senha = document.getElementById('senha')

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_usuarios", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_usuarios')) ?? []
const lerBanco = () => pegarLocalStorage()

export class Usuario {
  constructor(email, senha){
    this.email = email
    this.senha = senha
  }
}

const entrar = () => {
  const banco = lerBanco()
  let pet = new Usuario(
    $usuario.value,
    $senha.value
  )
  let indice = banco.find((item) => item == pet)
  if(indice){
    window.location.href = './html/dashboard.html'
  }
}

$formulario.addEventListener('submit', e => {
  e.preventDefault()
  entrar()
})


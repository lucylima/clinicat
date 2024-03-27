
let $formulario = document.getElementsByClassName('formulario')[0]
let $usuario = document.getElementById('usuario')
let $senha = document.getElementById('senha')

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_usuarios", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_usuarios')) ?? []
const lerBanco = () => pegarLocalStorage()

const entrar = () => {
  const banco = lerBanco()
  let form = new Usuario(
    $usuario.value,
    $senha.value
  )
  const login = banco.find((usuario) => usuario.email === form.email && usuario.senha == form.senha); // true
  if (login) {
    window.location.href = './html/dashboard.html'
  } else {
    alert('usuario ou senha incorretos')
  }
}

$formulario.addEventListener('submit', e => {
  e.preventDefault()
  entrar()
})


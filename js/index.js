import { Usuario } from "./registro/registro.js"

let $formulario = document.getElementsByClassName('formulario')[0]
let $usuario = document.getElementById('usuario')
let $senha = document.getElementById('senha')

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_usuarios", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_usuarios')) ?? []
const lerBanco = () => pegarLocalStorage()

const campoInvalido = () => {

}

const entrar = () => {
  const banco = lerBanco()
  banco.forEach(element => {
      console.log(element.nome)
  });

}

entrar()
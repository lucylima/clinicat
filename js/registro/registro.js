class Usuario {
  constructor(nome, email, senha){
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_usuarios", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_usuarios')) ?? []

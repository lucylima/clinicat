import { exibirEdicao } from "./dashboard-cadastro.js"
import { mostrarModal } from "./dashboard-modal.js"
import { $container, editarPet, deletarPet, atualizarCards } from "./dashboard.js"

const numeroAleatorio = Math.floor(Math.random() * 5 + 1)

export const criarCards = (pet) => {
  let $card = document.createElement('div')
  let $cardImagem = document.createElement('div')
  let $cardTitulo = document.createElement('h4')
  let $cardSubtitulo = document.createElement('p')
  let $cardEspecialidade = document.createElement('p')
  let $cardAcoes = document.createElement('div')
  let $botaoEditar = document.createElement('button')
  let $botaoDeletar = document.createElement('button')

  $card.classList.add('cardPet')
  $cardImagem.classList.add('imagem-cardPet')
  $cardTitulo.classList.add('titulo-cardPet')
  $cardSubtitulo.classList.add('subtitulo-cardPet')
  $cardEspecialidade.classList.add('especialidade-cardPet')
  $cardAcoes.classList.add('botoes-cardPet')
  $botaoEditar.classList.add('botao-editar-card')
  $botaoDeletar.classList.add('botao-deletar-card')

  switch (pet.raca) {
    case 'Cachorro': $cardImagem.style.backgroundImage = `url("../assets/dashboard/dashboard-cards/cachorros/cachorro${numeroAleatorio}.jpg")`
      break
    case 'Gato': $cardImagem.style.backgroundImage = `url('../assets/dashboard/dashboard-cards/gatos/gato${numeroAleatorio}.jpg')`
      break
    case 'Silvestre': $cardImagem.style.backgroundImage = `url('../assets/dashboard/dashboard-cards/coelhos/coelho${numeroAleatorio}.jpg')`
      break
  }

  $cardTitulo.innerText = pet.nome
  $cardSubtitulo.innerText = pet.raca
  $cardEspecialidade.innerText = pet.especialidade
  $botaoEditar.value = 'editar'
  $botaoEditar.innerText = 'Editar'
  $botaoDeletar.value = 'deletar'
  $botaoDeletar.innerText = 'Deletar'

  $botaoEditar.addEventListener('click', () => {
    exibirEdicao(pet.id)
  })
  $botaoDeletar.addEventListener('click', () => {
    deletarPet(pet)
  })

  $card.appendChild($cardImagem)
  $card.appendChild($cardTitulo)
  $card.appendChild($cardSubtitulo)
  $card.appendChild($cardEspecialidade)
  $cardAcoes.appendChild($botaoEditar)
  $cardAcoes.appendChild($botaoDeletar)
  $card.appendChild($cardAcoes)
  $container.appendChild($card)
}
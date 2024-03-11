import { mostrarModal } from './dashboard-modal.js'
import { criarCards } from './dashboard-cards.js'
import { $enviarForm } from './dashboard-cadastro.js'

const operacao = ''

const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_pets", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_pets')) ?? []
const lerBanco = () => pegarLocalStorage()

const $container = document.getElementsByClassName('container-principal')[0]
const $semItems = document.getElementsByClassName('sem-items')[0]
const $menu = document.getElementsByClassName('menu-opcao')
const $operacao = document.getElementsByClassName('categoria-menu')[0]
const $adicionarNovo = document.getElementsByClassName('adicionar-novo')

class Animal {
  constructor(id, nome, raca, especialidade, dono) {
    this.id = id
    this.nome = nome
    this.raca = raca
    this.especialidade = especialidade
    this.dono = dono
  }
}

const criaNovoPet = (pet) => {
  const banco = pegarLocalStorage()
  banco.push(pet)
  definirLocalStorage(banco)
}

const deletarPet = (pet) => {
  const banco = lerBanco()
  let indice = banco.findIndex((item) => item.id == pet.id)
  banco.splice(indice, 1)
  definirLocalStorage(banco)
  atualizarCards()
}

const editarPet = (pet) => {
  const banco = lerBanco()
  banco[pet.id] = pet
  definirLocalStorage(banco)
}

const atualizarCards = () => {
  const banco = lerBanco()
  const cards = document.querySelectorAll('.cardPet')
  for (let card of cards) card.parentNode.removeChild(card)
  banco.forEach(criarCards)
}

const alertaSemItens = (modo) => {
  if (modo === 'mostrar') {
    $container.style.flexWrap = 'nowrap'
    $semItems.classList.remove('none')
  } else if (modo === 'esconder') {
    $container.style.flexWrap = 'wrap'
    $semItems.classList.add('none')
  } else { console.log('erro') }
}

for (let item of $adicionarNovo) item.addEventListener('click', ()=> 
{
  $enviarForm.value = 'Cadastrar'
  mostrarModal()
})
for (let item of $menu) {
  item.addEventListener('click', () => {
    switch (item.id) {
      case 'inicio':
        $operacao.innerHTML = 'Início'
        break;
      case 'consultas':
        $operacao.innerHTML = 'Minhas consultas'
        break;
    }
  })
}


atualizarCards()

if (pegarLocalStorage() == true) {
  alertaSemItens('mostrar')
} else {
  alertaSemItens('esconder')
}

export {
  lerBanco,
  pegarLocalStorage,
  definirLocalStorage,
  criaNovoPet,
  deletarPet,
  atualizarCards,
  Animal,
  alertaSemItens,
  $container,
  editarPet
}
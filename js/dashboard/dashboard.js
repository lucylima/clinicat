import { mostrarModal, fecharModal } from './dashboard-modal.js'

const $container = document.getElementsByClassName('container-principal')[0]
const $semItems = document.getElementsByClassName('sem-items')[0]
const $menu = document.getElementsByClassName('menu-opcao')
const $operacao = document.getElementsByClassName('categoria-menu')[0]
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


const definirLocalStorage = (banco) => localStorage.setItem("banco_clinicat_pets", JSON.stringify(banco))
const pegarLocalStorage = () => JSON.parse(localStorage.getItem('banco_clinicat_pets')) ?? []
const lerBanco = () => pegarLocalStorage()

const criaPet = () => {
  const banco = pegarLocalStorage()
  banco.push(pet)
  definirLocalStorage(banco)
}

const deletarPet = (index) => {
  const banco = lerBanco()
  banco.splice(index, 1)
  definirLocalStorage(banco)
}

const atualizarPet = (index, pet) => {
  const banco = lerBanco()
  banco[index] = pet
  definirLocalStorage(banco)
}

const limparCampos = () => {
  $nomeTutor.value = ''
  $nomePet.value = ''
  $especialidade.value = ''
  for (let radio of $tipoAnimal) radio.checked = false
  document.getElementById('nome').dataset.index = 'novo'
}

const salvarPet = () => {
  const index = document.getElementById('nome').dataset.index
  if (index == 'novo') {
    let tipoAnimal

    const tamanho = lerBanco()
    const index = tamanho.length + 1
  
    for (let radio of $tipoAnimal) {
      if (radio.checked) tipoAnimal = radio.value
    }
  
    let novoPet = new Animal(
      index,
      $nomePet.value,
      tipoAnimal,
      $especialidade.value,
      $nomeTutor.value
    )
    if (index === 'novo') {
      criaPet(novoPet)
      atualizarPet()
      fecharModal()
    } else {
      atualizarPet(index, client)
      atualizarPet()
      fecharModal()
    }
  
    // Toastify({
    //   text: "Pet cadastrado com sucesso!",
    //   duration: 4000,
    //   style: {
    //     background: "linear-gradient(25deg, rgba(106,102,242,1) 1%, rgba(124,120,247,1) 50%, rgba(156,153,255,1) 100%)",
    //   }
    // }).showToast();
}

$formularioCadastro.addEventListener('submit', e => {
  e.preventDefault()

})

const criarCards = (pet) => {
  pet = {}

  let $card = document.createElement('div')
  let $cardImagem = document.createElement('img')
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
    case 'Cachorro': $cardImagem.src = 'https://placedog.net/100/50?r'
      break
    case 'Gato': $cardImagem.src = 'http://placekitten.com/100/50'
      break
    case 'Silvestre': $cardImagem.src = 'https://placebear.com/100/50'
      break
  }

  $cardTitulo.innerText = pet.nome
  $cardSubtitulo.innerText = pet.raca
  $cardEspecialidade.innerText = pet.especialidade
  $botaoEditar.value = 'editar'
  $botaoEditar.innerText = 'Editar'
  $botaoDeletar.value = 'deletar'
  $botaoDeletar.innerText = 'Deletar'

  $botaoEditar.addEventListener('click', () => { editarPet(pet.id) })
  $botaoDeletar.addEventListener('click', () => { deletarPet(pet.id) })


  $card.appendChild($cardImagem)
  $card.appendChild($cardTitulo)
  $card.appendChild($cardSubtitulo)
  $card.appendChild($cardEspecialidade)
  $cardAcoes.appendChild($botaoEditar)
  $cardAcoes.appendChild($botaoDeletar)
  $card.appendChild($cardAcoes)
  $container.appendChild($card)
}

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



console.log(lerBanco())


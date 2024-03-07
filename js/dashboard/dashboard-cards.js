export const criarCards = (objeto, container) => {
  objeto = []
  objeto.forEach(pet => {
    let $card = document.createElement('div')
    let $cardImagem = document.createElement('img')
    let $cardTitulo = document.createElement('h4')
    let $cardSubtitulo = document.createElement('p')
    let $cardEspecialidade = document.createElement('p')
    let $cardAcoes = document.createElement('div')
    let $botaoEditar = document.createElement('button')
    let $botaoDeletar = document.createElement('button')
    let $container = document.getElementsByClassName(container)[0]

    $card.classList.add('cardPet')
    $cardImagem.classList.add('imagem-cardPet')
    $cardTitulo.classList.add('titulo-cardPet')
    $cardSubtitulo.classList.add('subtitulo-cardPet')
    $cardEspecialidade.classList.add('especialidade-cardPet')
    $cardAcoes.classList.add('botoes-cardPet')
    $botaoEditar.classList.add('botao-editar-card')
    $botaoDeletar.classList.add('botao-deletar-card')

    switch(pet.raca){
      case 'cachorro':
        $cardImagem.src = ''
        break;

      case 'gato':
        $cardImagem.src = ''
        break;
      
      case 'silvestre':
        $cardImagem.src = ''
        break;
    }

    $cardTitulo.innerText = pet.nome
    $cardSubtitulo.innerText = pet.raca
    $cardEspecialidade.innerText = pet.especialidade
    
    $card.appendChild($cardImagem)
    $card.appendChild($cardTitulo)
    $card.appendChild($cardSubtitulo)
    $card.appendChild($cardEspecialidade)
    $cardAcoes.appendChild($botaoEditar)
    $cardAcoes.appendChild($botaoDeletar)
    $card.appendChild($cardAcoes)
    $container.appendChild($card)
  });
}



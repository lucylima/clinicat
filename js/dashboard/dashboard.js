const $container = document.getElementsByClassName('container-principal')[0]
const $semItems = document.getElementsByClassName('sem-items')[0]
const $menu = document.getElementsByClassName('menu-opcao')
const $operacao = document.getElementsByClassName('categoria-menu')[0]

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


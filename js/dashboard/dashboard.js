const container = document.getElementsByClassName('container-principal')[0]
const semItems = document.getElementsByClassName('sem-items')[0]
const menu = document.getElementsByClassName('menu-opcao')
const adicionarNovo = document.getElementsByClassName('adicionar-novo')
const modal = document.getElementsByClassName('modal-cadastro')[0]


const mostrarModal = () => {
  console.log('click')
  modal.style.display = 'block'
}


for (let item of adicionarNovo) {
  item.addEventListener('click', mostrarModal)
}

for (let item of menu) {
  item.addEventListener('click', () => {
    switch (item.id) {
      case 'inicio':

        break;
      case 'consultas':

        break;
        case 'conta':

        break;
        case 'pets':

        break;
    }
  })
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
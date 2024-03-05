const $adicionarNovo = document.getElementsByClassName('adicionar-novo')
const $modal = document.getElementsByClassName('modal-cadastro')[0]
const $labelAnimal = document.getElementsByClassName('label-radio')
const $fecharModal = document.getElementsByClassName('modal-fechar')[0]


const mostrarModal = () => {
  console.log('click')
  $modal.style.display = 'block'
}

for (let item of $adicionarNovo) {
  item.addEventListener('click', mostrarModal)
}


$fecharModal.onclick = () => $modal.style.display = 'none'

window.onclick = function (event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
}
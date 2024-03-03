const $adicionarNovo = document.getElementsByClassName('adicionar-novo')
const $modal = document.getElementsByClassName('modal-cadastro')[0]
const $labelAnimal = document.getElementsByClassName('label-radio')


const mostrarModal = () => {
  console.log('click')
  $modal.style.display = 'block'
}

const animalSelecionado = () => {

}

for (let item of $adicionarNovo) {
  item.addEventListener('click', mostrarModal)
}

window.onclick = function (event) {
  if (event.target == $modal) {
    $modal.style.display = "none";
  }
}
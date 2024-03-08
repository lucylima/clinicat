const $adicionarNovo = document.getElementsByClassName('adicionar-novo')
const $modal = document.getElementsByClassName('modal-cadastro')[0]
const $fecharModal = document.getElementsByClassName('modal-fechar')[0]

const mostrarModal = (operacao) => {
  if(operacao === 'editar'){

  } else if(operacao === 'cadastrar'){
    
  }
  $modal.style.display = 'block'
}
const fecharModal = () => $modal.style.display = 'none'

for (let item of $adicionarNovo) item.addEventListener('click', mostrarModal)

$fecharModal.onclick = () => fecharModal()
window.onclick = (event) => { if (event.target == $modal) fecharModal() }

export { mostrarModal, fecharModal }
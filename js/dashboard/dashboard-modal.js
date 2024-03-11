import { limparCampos } from './dashboard-cadastro.js'

const $modal = document.getElementsByClassName('modal-cadastro')[0]
const $fecharModal = document.getElementsByClassName('modal-fechar')[0]

const mostrarModal = () => { $modal.style.display = 'block' }
const fecharModal = () => {
  limparCampos()
  $modal.style.display = 'none'
}

$fecharModal.onclick = () => fecharModal()
window.onclick = (event) => { if (event.target == $modal) fecharModal() }

export { mostrarModal, fecharModal }
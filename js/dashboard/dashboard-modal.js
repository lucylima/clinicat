import { clearFields } from './dashboard-cadastro.js'

const $modal = document.getElementsByClassName('modal-cadastro')[0]
const $closeModal = document.getElementsByClassName('modal-fechar')[0]

const showModal = () => { $modal.style.display = 'block' }
const closeModal = () => {
  clearFields()
  $modal.style.display = 'none'
}

$fecharModal.onclick = () => closeModal()
window.onclick = (event) => { if (event.target == $modal) closeModal() }

export { showModal, closeModal }
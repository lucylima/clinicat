import createPet from '../../../'
import clearFields from '../../controller/dashboard.js'


$form.addEventListener('submit', e => {
  e.preventDefault()
  const database = readDatabase()
  const newUser = createPet(
    $name.value,
    $email.value,
    $senha.value
  )

  database.push(novoUsuario)
  setLocalStorage(database)
  clearFields()
  window.location.href = '../index.html'
})
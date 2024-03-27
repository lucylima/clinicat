import createPet from '../../../'
const $name = document.getElementById('name')
const $email = document.getElementById('email')
const $password = document.getElementById('password')
const $form = document.getElementsByClassName('form-register')[0]

const setLocalStorage = (database) => localStorage.setItem("database_clinicat_users", JSON.stringify(database))
const getLocalStorage = () => JSON.parse(localStorage.getItem('database_clinicat_users')) ?? []
const readDatabase = () =>  getLocalStorage()

const clearFields = () => {
  $name.value = ''
  $email.value = ''
  $password.value = ''
}

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
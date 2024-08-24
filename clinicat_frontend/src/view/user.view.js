import { createUser } from '../controller/user.controller.js'
import { readLocalStorage, setLocalStorage } from '../../model/UserDatabase.js'
import { elements } from './elements.js'

elements.register.$form.addEventListener('submit', (e) => {
  e.preventDefault()
  const database = readLocalStorage()
  const newUser = createUser(
    elements.register.$nameField.value,
    elements.register.$emailField.value,
    elements.register.$passwordField.value
  )
  database.push(newUser)
  setLocalStorage(database)
  window.location.href = '../../index.html'
})


const login = () => {
  const database = readLocalStorage()
  let user = createUser(
    undefined,
    elements.login.$userField.value,
    elements.login.$passwordField.value
  )

  const validateUser = database.find(
    (databaseUser) =>
      databaseUser.email === user.email &&
      databaseUser.password == user.password
  )

  if (validateUser) {
    setTimeout(() => {
      window.location.href = './view/dashboard/dashboard.html'
    }, 200)
  } else {
    alert('usuario ou senha incorretos')
  }
}

elements.login.$formLogin.addEventListener('submit', (e) => {
  e.preventDefault()
  login()
})

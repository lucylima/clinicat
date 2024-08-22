import { createUser } from '../controller/userController.js'
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

import { elements } from './js/elements.js'
import { readLocalStorage } from '../model/UserDatabase.js'
import { createUser } from '../controller/userController.js'

const login = () => {
  const database = readLocalStorage()
  let user = createUser(
    undefined,
    elements.login.$userField.value,
    elements.login.$passwordField.value
  )

  const validateUser = database.find((databaseUser) => databaseUser.email === user.email && databaseUser.password == user.password); 
  
  if (validateUser) {
    setTimeout(() => {
      window.location.href = './view/dashboard/dashboard.html'
    }, 200);
  } else {
    alert('usuario ou senha incorretos')
  }
}

elements.login.$formLogin.addEventListener('submit', e => {
  e.preventDefault()
  login()
})


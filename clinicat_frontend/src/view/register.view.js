import Swal from 'sweetalert2'
import { dashboard, registerForm } from './elements.js'
import { newUser } from '../model/User.model.js'
import { createUser } from '../controller/user.controller.js'

const registerUser = async () => {
  let gender
  for (let genders of registerForm.$genderRadio) {
    if (genders.checked == true) gender = genders.id
  }
  const user = newUser(
    registerForm.$nameField.value,
    registerForm.$phoneNumberField.value,
    gender,
    registerForm.$usernameField.value,
    registerForm.$emailField.value,
    registerForm.$passwordField.value
  )
  const response = await createUser(user)
  if (response) {
    Swal.fire({
      title: 'Sucesso',
      text: response,
      icon: 'success',
      timer: 2000
    })
  } else {
    Swal.fire({
      title: 'Error!',
      text: response,
      icon: 'error',
      timer: 2000
    })
  }
  console.log(user)
  console.log(response)
}

registerForm.$form.addEventListener('submit', async (e) => {
  e.preventDefault()
  await registerUser()
})

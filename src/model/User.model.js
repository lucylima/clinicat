class User {
  constructor(name, telephone, gender, username, email, password) {
    this.name = name
    this.telephone = telephone
    this.gender = gender
    this.username = username
    this.email = email
    this.password = password
  }
}

const newUser = (user) => {
  const { name, telephone, gender, username, email, password } = user
  const createdUser = new User(
    name,
    telephone,
    gender,
    username,
    email,
    password 
  )
  return createdUser
}

export { newUser }

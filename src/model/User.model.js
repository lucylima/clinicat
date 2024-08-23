class User {
  constructor(name, username, email, password) {
    this.name = name
    this.username = username
    this.email = email
    this.password = password
  }
}

const newUser = (name, username, email, password) => {
  let user = new User(name,username,  email, password)
  return user
}

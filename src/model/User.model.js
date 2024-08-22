class User {
  constructor(name, email, password) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}

const createUser = (name, email, password) => {
  let pet = new User(name, email, password);
  return pet;
};

export { createUser };
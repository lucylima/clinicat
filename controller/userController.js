import { User } from "../model/User.js";

const createUser = (name, email, password) => {
  let pet = new User(name, email, password);
  return pet;
};

export { createUser };

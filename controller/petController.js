import { Pet } from "../model/Pet.js";

const createPet = (id, petName, breed, speciality, petOwner) => {
  const pet = new Pet(id, petName, breed, speciality, petOwner);
  return pet;
};

export { createPet };

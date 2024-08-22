class Pet {
  constructor(id, petName, breed, speciality, petOwner) {
    this.id = id
    this.petName = petName
    this.breed = breed
    this.speciality = speciality
    this.petOwner = petOwner
  }
}

const createPet = (id, petName, breed, speciality, petOwner) => {
  const pet = new Pet(id, petName, breed, speciality, petOwner);
  return pet;
};

export { createPet };

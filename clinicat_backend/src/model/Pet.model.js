class Pet {
  constructor(name, breed, speciality, owner) {
    this.name = name
    this.breed = breed
    this.speciality = speciality
    this.owner = owner
  }
}

const newPet = (name, breed, owner) => {
  const createdPet = new Pet(name, breed, owner)
  return createdPet
}

export { newPet }

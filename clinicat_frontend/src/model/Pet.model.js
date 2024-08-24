class Pet {
  constructor(name, breed, speciality, owner) {
    this.name = name
    this.breed = breed
    this.speciality = speciality
    this.owner = owner
  }
}

const newPet = (pet) => {
  const { name, breed, speciality, owner } = pet
  const createdPet = new Pet(name, breed, speciality, owner)
  return createdPet
}

export { newPet }

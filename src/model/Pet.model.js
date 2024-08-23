class Pet {
  constructor(name, breed, speciality, owner, appointmentDate) {
    this.name = name
    this.breed = breed
    this.speciality = speciality
    this.owner = owner
    this.appointmentDate = appointmentDate
  }
}

const newPet = (pet) => {
  const { name, breed, speciality, owner, appointmentDate } = pet
  const createdPet = new Pet(name, breed, speciality, owner, appointmentDate)
  return createdPet
}

export { newPet }

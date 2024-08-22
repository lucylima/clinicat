class Pet {
  constructor(name, breed, speciality, owner, appointmentDate) {
    this.name = name
    this.breed = breed
    this.speciality = speciality
    this.owner = owner
    this.appointmentDate = appointmentDate
  }
}

const createPet = (newPet) => {
  const { name, breed, speciality, owner, appointmentDate } = newPet
  const pet = new Pet(name, breed, speciality, owner, appointmentDate)
  return pet
}

export { createPet }

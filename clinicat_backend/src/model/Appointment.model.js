class Appointment {
  constructor(speciality, date, time, pet, owner) {
    this.speciality = speciality
    this.date = date
    this.time = time
    this.pet = pet
    this.owner = owner
  }
}

const newAppointment = (speciality, date, time, pet, owner) => {
  const createdAppointment = new Appointment(speciality, date, time, pet, owner)
  return createdAppointment
}

export { newAppointment }
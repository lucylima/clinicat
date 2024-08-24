import { newAppointment } from '../model/Appointment.model.js'
import { database } from '../database/database.js'

const createAppointment = async (req, res) => {
  try {
    const { speciality, date, time, pet, owner } = req.body
    const appointment = newAppointment(speciality, date, time, pet, owner)
    const createdAppointment = await database.appointment.create({
      data: { appointment }
    })
    return res.status(201).json({ createdAppointment })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const allAppointments = async (req, res) => {
  try {
    const appointments = await database.appointment.findMany()
    return res.status(200).json({ appointments })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params
    const { date, time } = req.body
    const updatedAppointment = await database.appointment.update({
      where: id,
      data: {
        time,
        date
      }
    })
    return res.status(200).json({ updatedAppointment })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deleteAppointment = async (req, res) => {
  try {
    const { pet, owner, date } = req.body
    const deletedAppointment = await database.appointment.delete({
      where: {
        petId: pet,
        userId: owner,
        date
      }
    })
    return res.status(200).json({ deletedAppointment })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export {
  createAppointment,
  deleteAppointment,
  allAppointments,
  updateAppointment
}

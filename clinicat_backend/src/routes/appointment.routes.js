import { Router } from 'express'
import {
  allAppointments,
  createAppointment,
  deleteAppointment,
  updateAppointment
} from '../controller/appointment.controller.js'

const appointmentRouter = Router()

appointmentRouter.get('/appointment', allAppointments)
appointmentRouter.post('/appointment', createAppointment)
appointmentRouter.put('/appointment/:id', updateAppointment)
appointmentRouter.delete('/appointment', deleteAppointment)

export { appointmentRouter }

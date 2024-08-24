import { Router } from 'express'
import {
  allPets,
  createPet,
  deletePet,
  findPet,
  updatePet
} from '../controller/pet.controller.js'

const petRouter = Router()

petRouter.get('/pet/', allPets)
petRouter.get('/pet', findPet)
petRouter.post('/pet', createPet)
petRouter.put('/pet', updatePet)
petRouter.delete('/pet', deletePet)

export { petRouter }

import { Router } from 'express'
import {
  createUser,
  findUser,
  updateUser,
  deleteUser
} from '../controller/user.controller.js'

const userRouter = Router()

userRouter.get('/user', findUser)
userRouter.post('/user', createUser)
userRouter.put('/user:/id', updateUser)
userRouter.delete('/user/:id', deleteUser)

export { userRouter }

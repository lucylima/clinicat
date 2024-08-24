import express  from 'express'
import cors from 'cors'
import { userRouter } from './routes/user.routes.js'
import { petRouter } from './routes/pet.routes.js'

const server = express()
const port = 3000

server.use(express.json())
server.use(cors())

server.use(userRouter)
server.use(petRouter)

server.listen(port, () => {
  console.log(`servidor rodando com sucesso na porta ${port}`)
})

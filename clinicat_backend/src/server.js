import express  from 'express'
import cors from 'cors'

const server = express()
const port = 3000

server.use(express.json())
server.use(cors())

server.listen(port, () => {
  console.log(`servidor rodando com sucesso na porta ${port}`)
})

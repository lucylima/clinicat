import { newUser } from '../model/User.model.js'
import { database } from '../database/database.js'

const createUser = async (req, res) => {
  try {
    const { name, username, email, password, telephone, gender } = req.body
    const createdUser = await database.user.create({
      data: { name, username, email, password, telephone, gender }
    })
    return res.status(201).json({ createdUser })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const findUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const loginAuth = await database.user.findUniqueOrThrow({
      where: {
        OR: [
          {
            username
          },
          {
            email
          }
        ],
        AND: {
          password
        }
      }
    })
    if (loginAuth) {
      return res.status(200).json({ loginAuth })
    } else {
      return res.status(400).json({ error: 'senha ou usuario incorretos' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, username, email, password, telephone, gender } = req.body
    const user = newUser(name, username, email, password, telephone, gender)
    const updatedUser = await database.user.update({
      where: id,
      data: user
    })
    if (updatedUser) {
      return res.status(200).json({ user })
    } else {
      return res.status(404).json({ error: 'user not found' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await database.user.delete({
      where: id
    })
    if (deletedUser) {
      return res.status(200).json({ deleteUser })
    } else {
      return res.status(404).json({ error: 'não foi possível achar usuário' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { createUser, findUser, updateUser, deleteUser }

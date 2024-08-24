import { database } from '../database/database.js'
import { newPet } from '../model/Pet.model.js'

const createPet = async (req, res) => {
  try {
    const { name, breed, owner } = req.body
    const pet = newPet(name, breed, owner)
    const createdPet = await database.pet.create({
      data: pet
    })
    return res.status(201).json({ createdPet })
  } catch (error) {
    return res.status(200).json({ error })
  }
}

const findPet = async (req, res) => {
  try {
    const { name, owner } = req.body
    const foundPet = await database.pet.findUniqueOrThrow({
      where: {
        AND: {
          name: name,
          userId: owner
        }
      }
    })
    if (foundPet) {
      return res.status(200).json({ foundPet })
    } else {
      return res.status(404).json({ error: 'pet não encontrado' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const allPets = async (req, res) => {
  try {
    const { id } = req.body 
    const petList = await database.pet.findMany({
      where: { userId: id }
    })
    return res.status(200).json({ petList })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const updatePet = async (req, res) => {
  try {
    const { id, name, breed, owner } = req.body
    const updatedPet = await database.pet.update({
      where: { id, userId: owner },
      data: {
        name,
        breed
      }
    })
    return res.status(200).json({ updatedPet })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deletePet = async (req, res) => {
  try {
    const { name, owner } = req.body
    const deletedPet = await database.pet.delete({
      where: {
        name,
        userId: owner
      }
    })
    return res.status(200).json({ deletedPet })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

export { createPet, allPets, findPet, updatePet, deletePet }

import { database } from '../database/database.js'

const createPet = async (pet) => {
  try {
    const { name, breed, owner } = pet
    const newPet = await database.pet.create({
      data: pet
    })
    return 'Pet criado com sucesso!'
  } catch (error) {
    return error
  }
}

const findPet = async (name, owner) => {
  try {
    const foundPet = await database.pet.findUniqueOrThrow({
      where: {
        AND: {
          name: name,
          userId: owner
        }
      }
    })
    if (foundPet) {
      return foundPet
    } else {
      return 'Nenhum pet foi achado'
    }
  } catch (error) {
    return error
  }
}

const allPets = async (id) => {
  try {
    const petList = await database.pet.findMany({
      where: { userId: id }
    })
    if (petList) {
      return petList
    } else {
      return null
    }
  } catch (error) {
    return error
  }
}

const updatePet = async (pet) => {
  try {
    const { id, name, breed, owner } = pet
    const updatedPet = await database.pet.update({
      where: { id, userId: owner },
      data: {
        name,
        breed
      }
    })
    if (updatedPet) {
      return 'Pet editado com sucesso'
    } else {
      return 'Não encontrado'
    }
  } catch (error) {
    return error
  }
}

const deletePet = async (pet) => {
  try {
    const { name, owner } = pet
    const petID = await database.pet.findUniqueOrThrow({
      where: {
        AND: {
          owner_id: owner,
          name
        }
      },
      select: {
        id: true
      }
    })
    const deletedPet = await database.pet.delete({
      where: {
        id
      }
    })
    if (deletedPet) {
      return 'Pet deletado com sucesso'
    } else {
      return 'Erro ao deletar pet'
    }
  } catch (error) {
    return error
  }
}

export { createPet, allPets, findPet, updatePet, deletePet }

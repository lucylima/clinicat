import { database } from '../database/database.js'

const createPet = async (pet) => {
  try {
    const { name, breed, speciality, owner} = pet
    const newPet = await database.pet.create({
      data: {
        pet
      }
    })
    return 'Pet criado com sucesso!'
  } catch (error) {
    return error
  }
}

const findPet = async (pet) => {
  try {
    const { name, owner } = pet
    const foundPet = await database.pet.findUniqueOrThrow({
      where: {
        AND: {
          owner_id: owner,
          name
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

const updatePet = async (pet) => {
  try {
    const { name, breed, speciality, appointmentDate, owner } = pet
    const petID = await database.user.findUniqueOrThrow({
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
    const updatedPet = await database.pet.update({
      where: { id: petID },
      data: {
        name,
        breed,
        speciality,
        appointmentDate
      }
    })
    if (updatedPet) {
      return 'Pet editado com sucesso'
    } else {
      return 'Erro na edição do pet'
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
        id: petID
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

export { createPet, findPet, updatePet, deletePet }

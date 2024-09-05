import axios from 'axios'

const userAxios = axios.create({
  baseURL: 'https://kxzy5s-3000.csb.app/user'
})

const createUser = async (user) => {
  try {
    const { name, username, email, password, telephone, gender } = user
    await userAxios.post('', {
      name,
      username,
      email,
      password,
      telephone,
      gender
    })
    return 'Usuário criado com sucesso!'
  } catch (error) {
    return error
  }
}

const findUser = async (user) => {
  try {
    const { username, email, password } = user
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
      return true
    } else {
      return false
    }
  } catch (error) {
    return error
  }
}

const updateUser = async (user) => {
  try {
    const { id, name, username, email, password, telephone, gender } = user
    const updatedUser = await database.user.update({
      where: id,
      data: user
    })
    if (updatedUser) {
      return 'Usuário editado com sucesso'
    } else {
      return 'Erro na edição do usuário'
    }
  } catch (error) {
    return error
  }
}

const deleteUser = async (id) => {
  try {
    const deletedUser = await database.user.delete({
      where: id
    })
    if (deletedUser) {
      return 'Usuário deletado com sucesso'
    } else {
      return 'Erro ao deletar usuário'
    }
  } catch (error) {
    return error
  }
}

export { createUser, findUser, updateUser, deleteUser }

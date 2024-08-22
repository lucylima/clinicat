import { database } from '../database/database'

const createUser = async (user) => {
  const { name, email, password } = user
  const newUser = await database.user.create({
    data: {
      user
    }
  })
}

const findUser = async (user) => {
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
    return 'senha ou usuário incorretos'
  }
}

export { findUser }

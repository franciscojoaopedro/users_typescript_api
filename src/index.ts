import express from 'express'
import { config } from 'dotenv'
import { GetUserController } from './controllers/get-users/gett-users'
import { MongoGetUsersRepository } from './repositories/mongo-get-users'
import { MongoClient } from './database/mongo'

const main = async () => {
  config()
  const app = express()
  await MongoClient.connect()
  app.get('/users', async (req, res) => {
    const mongoGetUserRepository = new MongoGetUsersRepository()

    const getUserController = new GetUserController(mongoGetUserRepository)

    const { body, statusCode } = await getUserController.handle()

    res.send(body).status(statusCode)
  })
  const port = process.env.PORT || 8000

  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}....`)
  })
}
main()

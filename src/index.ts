import express from 'express'
import { config } from 'dotenv'
import { GetUserController } from './controllers/get-users/gett-users'
import { MongoGetUsersRepository } from './repositories/mongo-get-users'
config()

const app = express()

const port = process.env.PORT || 8000

app.get('/users', async (req, res) => {
  const mongoGetUserRepository = new MongoGetUsersRepository()

  const getUserController = new GetUserController(mongoGetUserRepository)

  const { body, statusCode } = await getUserController.handle()

  res.send(body).status(statusCode)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}....`)
})

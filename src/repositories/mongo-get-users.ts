import { IGetUserRepository } from '../controllers/get-users/protocols'
import { User } from '../models/user'

export class MongoGetUsersRepository implements IGetUserRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: 'Francisco',
        lastName: 'Pedro',
        email: 'francisco@gmail.com',
        password: '123',
      },
    ]
  }
}

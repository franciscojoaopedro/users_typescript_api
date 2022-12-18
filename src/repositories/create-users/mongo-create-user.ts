import {
  CreateUserParams,
  ICreateUserRepository,
} from '../../controllers/create-users/protocols'
import { MongoClient } from '../../database/mongo'
import { User } from '../../models/user'

export class MongoCreateUser implements ICreateUserRepository {
  async createUser(param: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection('users')
      .insertOne(param)

    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('users')
      .findOne({ _id: insertedId })

    if (!user) {
      throw new Error('user not created')
    }

    const { _id, ...rest } = user
    return { id: _id.toHexString(), ...rest }
  }
}

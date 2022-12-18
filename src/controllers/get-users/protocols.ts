import { User } from '../../models/user'
import { HttpResponse } from '../protocols'

export interface IGetUserControllers {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUserRepository {
  getUsers(): Promise<User[]>
}

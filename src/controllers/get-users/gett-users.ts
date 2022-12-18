import { IGetUserControllers, IGetUserRepository } from './protocols'

export class GetUserControllers implements IGetUserControllers {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async handle() {
    try {
      // validar requisição
      // direcionar chamada para o repository
      const users = await this.getUserRepository.getUsers()
      return {
        statusCode: 200,
        body: users,
      }
    } catch (error) {
      return {
        statusCode: 200,
        body: 'Something went wrong.',
      }
    }
  }
}

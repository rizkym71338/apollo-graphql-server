import { authenticationMiddleware } from '../../middlewares'
import { userService } from '../../services'
import { NotFoundError } from '../../libs'

export const userQueryResolver = {
  async users(_: unknown, __: unknown, { token }: { token: string }) {
    authenticationMiddleware(token)

    return await userService.getAllUser()
  },

  async user(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const user = await userService.getUser(id)
    if (!user) throw new NotFoundError(`User with id ${id} not found`)

    return user
  },
}

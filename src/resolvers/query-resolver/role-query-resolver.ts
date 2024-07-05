import { authenticationMiddleware } from '../../middlewares'
import { roleService } from '../../services'
import { NotFoundError } from '../../libs'

export const roleQueryResolver = {
  async roles(_: unknown, __: unknown, { token }: { token: string }) {
    authenticationMiddleware(token)

    return await roleService.getAllRole()
  },

  async role(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const role = await roleService.getRole(id)
    if (!role) throw new NotFoundError(`Role with id ${id} not found`)

    return role
  },
}

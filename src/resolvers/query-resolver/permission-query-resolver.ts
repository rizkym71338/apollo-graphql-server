import { authenticationMiddleware } from '../../middlewares'
import { permissionService } from '../../services'
import { NotFoundError } from '../../libs'

export const permissionQueryResolver = {
  async permissions(_: unknown, __: unknown, { token }: { token: string }) {
    authenticationMiddleware(token)

    return await permissionService.getAllPermission()
  },

  async permission(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const permission = await permissionService.getPermission(id)
    if (!permission) throw new NotFoundError(`Permission with id ${id} not found`)

    return permission
  },
}

import { permissionService, rolePermissionService } from '../../services'
import { authenticationMiddleware } from '../../middlewares'
import { BadRequestError, NotFoundError } from '../../libs'
import { PermissionInput } from '../../types'

export const permissionMutationResolver = {
  async createPermission(_: unknown, { input }: { input: PermissionInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingPermission = await permissionService.getPermissionByName(input.name)
    if (existingPermission) throw new BadRequestError(`Permission with name ${input.name} already exists`)

    return await permissionService.createPermission(input)
  },

  async updatePermission(_: unknown, { id, input }: { id: string; input: PermissionInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingPermission = await permissionService.getPermission(id)
    if (!existingPermission) throw new NotFoundError(`Permission with id ${id} not found`)

    const permissionWithSameName = await permissionService.getPermissionByName(input.name)
    if (permissionWithSameName && permissionWithSameName.id !== id) throw new BadRequestError(`Permission with name ${input.name} already exists`)

    return await permissionService.updatePermission(id, input)
  },

  async deletePermission(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingPermission = await permissionService.getPermission(id)
    if (!existingPermission) throw new NotFoundError(`Permission with id ${id} not found`)

    await rolePermissionService.deletePermissionFromAllRole(id)

    return await permissionService.deletePermission(id)
  },
}

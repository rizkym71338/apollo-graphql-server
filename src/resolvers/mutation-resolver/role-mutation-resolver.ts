import { permissionService, rolePermissionService, roleService, userService } from '../../services'
import { authenticationMiddleware } from '../../middlewares'
import { BadRequestError, NotFoundError } from '../../libs'
import { RoleInput } from '../../types'

export const roleMutationResolver = {
  async createRole(_: unknown, { input }: { input: RoleInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingRole = await roleService.getRoleByName(input.name)
    if (existingRole) throw new BadRequestError(`Role with name ${input.name} already exists`)

    for (const permissionId of input.permissionIds) {
      const existingPermission = await permissionService.getPermission(permissionId)
      if (!existingPermission) throw new NotFoundError(`Permission with id ${permissionId} not found`)
    }

    const newRole = await roleService.createRole({ name: input.name })

    await Promise.all(input.permissionIds.map((permissionId) => rolePermissionService.createRolePermission(newRole.id, permissionId)))

    return newRole
  },

  async updateRole(_: unknown, { id, input }: { id: string; input: RoleInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingRole = await roleService.getRole(id)
    if (!existingRole) throw new NotFoundError(`Role with id ${id} not found`)

    const roleWithSameName = await roleService.getRoleByName(input.name)
    if (roleWithSameName && roleWithSameName.id !== id) throw new BadRequestError(`Role with name ${input.name} already exists`)

    for (const permissionId of input.permissionIds) {
      const existingPermission = await permissionService.getPermission(permissionId)
      if (!existingPermission) throw new NotFoundError(`Permission with id ${permissionId} not found`)
    }

    const currentRolePermissions = await rolePermissionService.getRolePermissionsByRoleId(id)
    await Promise.all(currentRolePermissions.map((rolePermission) => rolePermissionService.deleteRolePermission(rolePermission.id)))

    await Promise.all(input.permissionIds.map((permissionId) => rolePermissionService.createRolePermission(id, permissionId)))

    return await roleService.updateRole(id, { name: input.name })
  },

  async deleteRole(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingRole = await roleService.getRole(id)
    if (!existingRole) throw new NotFoundError(`Role with id ${id} not found`)

    const userWithThisRole = await userService.getUserByRoleId(id)
    if (userWithThisRole) throw new BadRequestError(`Role with id ${id} is still in use by user`)

    await rolePermissionService.deleteRoleFromAllPermission(id)

    return await roleService.deleteRole(id)
  },
}

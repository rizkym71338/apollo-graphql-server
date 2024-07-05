import { rolePermissionService } from '../services'

export const permissionResolver = {
  async roles(permission: { id: string }) {
    return await rolePermissionService.getRolesByPermissionId(permission.id)
  },
}

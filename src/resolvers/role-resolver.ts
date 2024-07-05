import { rolePermissionService } from '../services'

export const roleResolver = {
  async permissions(role: { id: string }) {
    return await rolePermissionService.getPermissionsByRoleId(role.id)
  },
}

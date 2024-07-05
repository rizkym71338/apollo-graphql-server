import { rolePermissionService, userService } from '../services'

export const roleResolver = {
  async permissions({ id }: { id: string }) {
    return await rolePermissionService.getPermissionsByRoleId(id)
  },

  async users({ id }: { id: string }) {
    return await userService.getUsersByRoleId(id)
  },
}

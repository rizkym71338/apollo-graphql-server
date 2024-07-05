import { rolePermissionService } from '../services'

export const permissionResolver = {
  async roles({ id }: { id: string }) {
    return await rolePermissionService.getRolesByPermissionId(id)
  },
}

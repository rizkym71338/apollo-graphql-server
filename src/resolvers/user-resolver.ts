import { roleService } from '../services'

export const userResolver = {
  async role({ roleId }: { roleId: string }) {
    return await roleService.getRole(roleId)
  },
}

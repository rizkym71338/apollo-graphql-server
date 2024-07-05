import { prisma } from '../libs'

export const rolePermissionService = {
  async getRolePermission(id: string) {
    return await prisma.rolePermission.findUnique({ where: { id } })
  },

  async getRolePermissionsByRoleId(roleId: string) {
    return await prisma.rolePermission.findMany({ where: { roleId } })
  },

  async getRolePermissionsByPermissionId(permissionId: string) {
    return await prisma.rolePermission.findMany({ where: { permissionId } })
  },

  async getPermissionsByRoleId(roleId: string) {
    return await prisma.rolePermission
      .findMany({ where: { roleId }, include: { permission: true } })
      .then((rolePermissions) => rolePermissions.map(({ permission }) => permission))
  },

  async getRolesByPermissionId(permissionId: string) {
    return await prisma.rolePermission
      .findMany({ where: { permissionId }, include: { role: true } })
      .then((rolePermissions) => rolePermissions.map(({ role }) => role))
  },

  async createRolePermission(roleId: string, permissionId: string) {
    return await prisma.rolePermission.create({ data: { roleId, permissionId } })
  },

  async deleteRolePermission(id: string) {
    return await prisma.rolePermission.delete({ where: { id } })
  },

  async deletePermissionFromAllRole(permissionId: string) {
    return await prisma.rolePermission.deleteMany({ where: { permissionId } })
  },

  async deleteRoleFromAllPermission(roleId: string) {
    return await prisma.rolePermission.deleteMany({ where: { roleId } })
  },
}

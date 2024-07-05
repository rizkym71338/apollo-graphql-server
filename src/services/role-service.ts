import { Prisma } from '@prisma/client'

import { prisma } from '../libs'

export const roleService = {
  async getAllRole() {
    return await prisma.role.findMany({ orderBy: { createdAt: 'desc' } })
  },

  async getRole(id: string) {
    return await prisma.role.findUnique({ where: { id } })
  },

  async getRoleByName(name: string) {
    return await prisma.role.findFirst({ where: { name } })
  },

  async createRole(data: Prisma.RoleCreateInput) {
    return await prisma.role.create({ data })
  },

  async updateRole(id: string, data: Prisma.RoleUpdateInput) {
    return await prisma.role.update({ where: { id }, data })
  },

  async deleteRole(id: string) {
    return await prisma.role.delete({ where: { id } })
  },
}

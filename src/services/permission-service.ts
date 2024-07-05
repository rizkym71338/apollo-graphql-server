import { Prisma } from '@prisma/client'

import { prisma } from '../libs'

export const permissionService = {
  async getAllPermission() {
    return await prisma.permission.findMany({ orderBy: { createdAt: 'desc' } })
  },

  async getPermission(id: string) {
    return await prisma.permission.findUnique({ where: { id } })
  },

  async getPermissionByName(name: string) {
    return await prisma.permission.findFirst({ where: { name } })
  },

  async createPermission(data: Prisma.PermissionCreateInput) {
    return await prisma.permission.create({ data })
  },

  async updatePermission(id: string, data: Prisma.PermissionUpdateInput) {
    return await prisma.permission.update({ where: { id }, data })
  },

  async deletePermission(id: string) {
    return await prisma.permission.delete({ where: { id } })
  },
}

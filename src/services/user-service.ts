import { UserInput } from '../types'
import { prisma } from '../libs'

export const userService = {
  async getAllUser() {
    return await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })
  },

  async getUsersByRoleId(roleId: string) {
    return await prisma.user.findMany({ where: { roleId }, orderBy: { createdAt: 'desc' } })
  },

  async getUser(id: string) {
    return await prisma.user.findUnique({ where: { id } })
  },

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } })
  },

  async getUserByRoleId(roleId: string) {
    return await prisma.user.findFirst({ where: { roleId } })
  },

  async createUser(data: UserInput) {
    return await prisma.user.create({ data })
  },

  async updateUser(id: string, data: UserInput) {
    return await prisma.user.update({ where: { id }, data })
  },

  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id } })
  },
}

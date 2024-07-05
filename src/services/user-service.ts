import { prisma } from '../libs'

export const userService = {
  async getAllUser() {
    return await prisma.user.findMany({ orderBy: { id: 'desc' } })
  },

  async getUser(id: string) {
    return await prisma.user.findUnique({ where: { id } })
  },

  async createUser(data: any) {
    return await prisma.user.create({ data })
  },

  async updateUser(id: string, data: any) {
    return await prisma.user.update({ where: { id }, data })
  },

  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id } })
  },
}

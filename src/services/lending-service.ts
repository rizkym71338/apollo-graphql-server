import { prisma } from '../libs'
import { LendingInput } from '../schemas/types'

export const lendingService = {
  async getAllLending() {
    return await prisma.lending.findMany({ orderBy: { id: 'desc' } })
  },

  async getLending(id: string) {
    return await prisma.lending.findUnique({ where: { id } })
  },

  async getLendingsByBookId(bookId: string) {
    return await prisma.lending.findMany({ where: { bookId }, orderBy: { id: 'desc' } })
  },

  async getLendingsByMemberId(memberId: string) {
    return await prisma.lending.findMany({ where: { memberId }, orderBy: { id: 'desc' } })
  },

  async createLending(data: LendingInput) {
    return await prisma.lending.create({ data })
  },

  async updateLending(id: string, data: LendingInput) {
    return await prisma.lending.update({ where: { id }, data })
  },

  async deleteLending(id: string) {
    return await prisma.lending.delete({ where: { id } })
  },
}

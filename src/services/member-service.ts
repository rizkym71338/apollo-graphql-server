import { prisma } from '../libs'
import { MemberInput } from '../schemas/types'

export const memberService = {
  async getAllMember() {
    return await prisma.member.findMany({ orderBy: { id: 'desc' } })
  },

  async getMember(id: string) {
    return await prisma.member.findUnique({ where: { id } })
  },

  async createMember(data: MemberInput) {
    return await prisma.member.create({ data })
  },

  async updateMember(id: string, data: MemberInput) {
    return await prisma.member.update({ where: { id }, data })
  },

  async deleteMember(id: string) {
    return await prisma.member.delete({ where: { id } })
  },
}

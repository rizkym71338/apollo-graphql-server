import { BookInput, LendingInput, MemberInput } from '../schemas/types'
import { bookService, lendingService, memberService } from '../services'

export const mutationResolver = {
  async createBook(_: unknown, { input }: { input: BookInput }) {
    return await bookService.createBook(input)
  },

  async updateBook(_: unknown, { id, input }: { id: string; input: BookInput }) {
    return await bookService.updateBook(id, input)
  },

  async deleteBook(_: unknown, { id }: { id: string }) {
    return await bookService.deleteBook(id)
  },

  async createMember(_: unknown, { input }: { input: MemberInput }) {
    return await memberService.createMember(input)
  },

  async updateMember(_: unknown, { id, input }: { id: string; input: MemberInput }) {
    return await memberService.updateMember(id, input)
  },

  async deleteMember(_: unknown, { id }: { id: string }) {
    return await memberService.deleteMember(id)
  },

  async createLending(_: unknown, { input }: { input: LendingInput }) {
    return await lendingService.createLending(input)
  },

  async updateLending(_: unknown, { id, input }: { id: string; input: LendingInput }) {
    return await lendingService.updateLending(id, input)
  },

  async deleteLending(_: unknown, { id }: { id: string }) {
    return await lendingService.deleteLending(id)
  },
}

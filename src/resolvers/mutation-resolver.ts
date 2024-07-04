import { ENV, UnauthenticatedError } from '../libs'
import { BookInput, LendingInput, MemberInput } from '../types'
import { bookService, lendingService, memberService } from '../services'

export const mutationResolver = {
  async createBook(_: unknown, { input }: { input: BookInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await bookService.createBook(input)
  },

  async updateBook(_: unknown, { id, input }: { id: string; input: BookInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await bookService.updateBook(id, input)
  },

  async deleteBook(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await bookService.deleteBook(id)
  },

  async createMember(_: unknown, { input }: { input: MemberInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await memberService.createMember(input)
  },

  async updateMember(_: unknown, { id, input }: { id: string; input: MemberInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await memberService.updateMember(id, input)
  },

  async deleteMember(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await memberService.deleteMember(id)
  },

  async createLending(_: unknown, { input }: { input: LendingInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await lendingService.createLending(input)
  },

  async updateLending(_: unknown, { id, input }: { id: string; input: LendingInput }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await lendingService.updateLending(id, input)
  },

  async deleteLending(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await lendingService.deleteLending(id)
  },
}

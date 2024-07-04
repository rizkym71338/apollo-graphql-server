import { ENV, UnauthenticatedError } from '../libs'
import { bookService, lendingService, memberService } from '../services'

export const queryResolver = {
  async books(_: unknown, __: unknown, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await bookService.getAllBook()
  },

  async book(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await bookService.getBook(id)
  },

  async members(_: unknown, __: unknown, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await memberService.getAllMember()
  },

  async member(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await memberService.getMember(id)
  },

  async lendings(_: unknown, __: unknown, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await lendingService.getAllLending()
  },

  async lending(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    if (token !== ENV.SECRET_TOKEN) throw new UnauthenticatedError('Unauthenticated')
    return await lendingService.getLending(id)
  },
}

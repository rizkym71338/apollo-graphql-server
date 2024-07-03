import { bookService, lendingService, memberService } from '../services'

export const queryResolver = {
  async books() {
    return await bookService.getAllBook()
  },

  async book(_: unknown, { id }: { id: string }) {
    return await bookService.getBook(id)
  },

  async members() {
    return await memberService.getAllMember()
  },

  async member(_: unknown, { id }: { id: string }) {
    return await memberService.getMember(id)
  },

  async lendings() {
    return await lendingService.getAllLending()
  },

  async lending(_: unknown, { id }: { id: string }) {
    return await lendingService.getLending(id)
  },
}

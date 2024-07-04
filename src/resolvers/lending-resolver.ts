import { Lending } from '../types'
import { bookService, memberService } from '../services'

export const lendingResolver = {
  async book({ bookId }: Lending) {
    return await bookService.getBook(bookId)
  },

  async member({ memberId }: Lending) {
    return await memberService.getMember(memberId)
  },
}

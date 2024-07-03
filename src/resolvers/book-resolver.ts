import { Book } from '../schemas/types'
import { lendingService } from '../services'

export const bookResolver = {
  async lendings({ id }: Book) {
    return await lendingService.getLendingsByBookId(id)
  },
}

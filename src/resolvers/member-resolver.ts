import { Member } from '../schemas/types'
import { lendingService } from '../services'

export const memberResolver = {
  async lendings({ id }: Member) {
    return await lendingService.getLendingsByMemberId(id)
  },
}

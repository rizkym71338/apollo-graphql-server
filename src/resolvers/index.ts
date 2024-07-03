import { bookService, lendingService, memberService } from '../services'
import { Book, Lending, Member } from '../schemas/types'
import { queryResolver } from './query-resolver'
import { mutationResolver } from './mutation-resolver'
import { bookResolver } from './book-resolver'
import { memberResolver } from './member-resolver'
import { lendingResolver } from './lending-resolver'

export const resolvers = { Query: queryResolver, Mutation: mutationResolver, Book: bookResolver, Member: memberResolver, Lending: lendingResolver }

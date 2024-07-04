import { queryResolver } from './query-resolver'
import { mutationResolver } from './mutation-resolver'
import { bookResolver } from './book-resolver'
import { memberResolver } from './member-resolver'
import { lendingResolver } from './lending-resolver'

export const resolvers = { Query: queryResolver, Mutation: mutationResolver, Book: bookResolver, Member: memberResolver, Lending: lendingResolver }

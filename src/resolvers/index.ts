import { permissionResolver } from './permission-resolver'
import { mutationResolver } from './mutation-resolver'
import { queryResolver } from './query-resolver'
import { roleResolver } from './role-resolver'

export const resolvers = { Query: queryResolver, Mutation: mutationResolver, Role: roleResolver, Permission: permissionResolver }

import { permissionQueryResolver } from './permission-query-resolver'
import { roleQueryResolver } from './role-query-resolver'
import { userQueryResolver } from './user-query-resolver'

export const queryResolver = { ...permissionQueryResolver, ...roleQueryResolver, ...userQueryResolver }

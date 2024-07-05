import { permissionQueryResolver } from './permission-query-resolver'
import { roleQueryResolver } from './role-query-resolver'

export const queryResolver = { ...permissionQueryResolver, ...roleQueryResolver }

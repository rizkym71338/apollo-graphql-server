import { permissionMutationResolver } from './permission-mutation-resolver'
import { roleMutationResolver } from './role-mutation-resolver'

export const mutationResolver = { ...permissionMutationResolver, ...roleMutationResolver }

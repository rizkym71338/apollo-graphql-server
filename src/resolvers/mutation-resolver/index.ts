import { permissionMutationResolver } from './permission-mutation-resolver'
import { roleMutationResolver } from './role-mutation-resolver'
import { userMutationResolver } from './user-mutation-resolver'

export const mutationResolver = { ...permissionMutationResolver, ...roleMutationResolver, ...userMutationResolver }

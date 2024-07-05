import { authenticationMiddleware } from '../../middlewares'
import { roleService, userService } from '../../services'
import { BadRequestError } from '../../libs'
import { UserInput } from '../../types'

export const userMutationResolver = {
  async createUser(_: unknown, { input }: { input: UserInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingUser = await userService.getUserByEmail(input.email)
    if (existingUser) throw new BadRequestError(`User with email ${input.email} already exists`)

    const existingRole = await roleService.getRole(input.roleId)
    if (!existingRole) throw new BadRequestError(`Role with id ${input.roleId} not found`)

    return await userService.createUser(input)
  },

  async updateUser(_: unknown, { id, input }: { id: string; input: UserInput }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingUser = await userService.getUser(id)
    if (!existingUser) throw new BadRequestError(`User with id ${id} not found`)

    const existingRole = await roleService.getRole(input.roleId)
    if (!existingRole) throw new BadRequestError(`Role with id ${input.roleId} not found`)

    return await userService.updateUser(id, input)
  },

  async deleteUser(_: unknown, { id }: { id: string }, { token }: { token: string }) {
    authenticationMiddleware(token)

    const existingUser = await userService.getUser(id)
    if (!existingUser) throw new BadRequestError(`User with id ${id} not found`)

    return await userService.deleteUser(id)
  },
}

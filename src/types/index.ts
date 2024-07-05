export interface PermissionInput {
  name: string
}

export interface RoleInput {
  name: string
  permissionIds: string[]
}

export interface UserInput {
  email: string
  name: string
  password: string
  roleId: string
}

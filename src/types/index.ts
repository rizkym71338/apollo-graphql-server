export interface PermissionInput {
  name: string
}

export interface RoleInput {
  name: string
  permissionIds: string[]
}

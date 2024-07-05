"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type User {
    id: ID
    email: String
    name: String
    password: String

    roleId: ID
    role: Role

    createdAt: String
    updatedAt: String
  }

  input UserInput {
    email: String!
    name: String!
    password: String!
    roleId: ID!
  }

  type Role {
    id: ID
    name: String

    users: [User]
    permissions: [Permission]

    createdAt: String
    updatedAt: String
  }

  input RoleInput {
    name: String!
    permissionIds: [ID!]!
  }

  type Permission {
    id: ID
    name: String

    roles: [Role]

    createdAt: String
    updatedAt: String
  }

  input PermissionInput {
    name: String!
  }

  type Query {
    permissions: [Permission]
    permission(id: ID!): Permission

    roles: [Role]
    role(id: ID!): Role

    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createPermission(input: PermissionInput!): Permission
    updatePermission(id: ID!, input: PermissionInput!): Permission
    deletePermission(id: ID!): Permission

    createRole(input: RoleInput!): Role
    updateRole(id: ID!, input: RoleInput!): Role
    deleteRole(id: ID!): Role

    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): User
  }
`;

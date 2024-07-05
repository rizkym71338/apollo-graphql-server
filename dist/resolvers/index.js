"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const permission_resolver_1 = require("./permission-resolver");
const mutation_resolver_1 = require("./mutation-resolver");
const query_resolver_1 = require("./query-resolver");
const role_resolver_1 = require("./role-resolver");
exports.resolvers = { Query: query_resolver_1.queryResolver, Mutation: mutation_resolver_1.mutationResolver, Role: role_resolver_1.roleResolver, Permission: permission_resolver_1.permissionResolver };

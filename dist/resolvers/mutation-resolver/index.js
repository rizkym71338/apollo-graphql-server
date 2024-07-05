"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationResolver = void 0;
const permission_mutation_resolver_1 = require("./permission-mutation-resolver");
const role_mutation_resolver_1 = require("./role-mutation-resolver");
const user_mutation_resolver_1 = require("./user-mutation-resolver");
exports.mutationResolver = Object.assign(Object.assign(Object.assign({}, permission_mutation_resolver_1.permissionMutationResolver), role_mutation_resolver_1.roleMutationResolver), user_mutation_resolver_1.userMutationResolver);

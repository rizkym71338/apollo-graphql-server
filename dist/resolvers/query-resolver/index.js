"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const permission_query_resolver_1 = require("./permission-query-resolver");
const role_query_resolver_1 = require("./role-query-resolver");
const user_query_resolver_1 = require("./user-query-resolver");
exports.queryResolver = Object.assign(Object.assign(Object.assign({}, permission_query_resolver_1.permissionQueryResolver), role_query_resolver_1.roleQueryResolver), user_query_resolver_1.userQueryResolver);

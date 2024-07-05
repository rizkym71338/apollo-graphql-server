"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMutationResolver = void 0;
const services_1 = require("../../services");
const middlewares_1 = require("../../middlewares");
const libs_1 = require("../../libs");
exports.roleMutationResolver = {
    createRole(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingRole = yield services_1.roleService.getRoleByName(input.name);
            if (existingRole)
                throw new libs_1.BadRequestError(`Role with name ${input.name} already exists`);
            for (const permissionId of input.permissionIds) {
                const existingPermission = yield services_1.permissionService.getPermission(permissionId);
                if (!existingPermission)
                    throw new libs_1.NotFoundError(`Permission with id ${permissionId} not found`);
            }
            const newRole = yield services_1.roleService.createRole({ name: input.name });
            yield Promise.all(input.permissionIds.map((permissionId) => services_1.rolePermissionService.createRolePermission(newRole.id, permissionId)));
            return newRole;
        });
    },
    updateRole(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingRole = yield services_1.roleService.getRole(id);
            if (!existingRole)
                throw new libs_1.NotFoundError(`Role with id ${id} not found`);
            const roleWithSameName = yield services_1.roleService.getRoleByName(input.name);
            if (roleWithSameName && roleWithSameName.id !== id)
                throw new libs_1.BadRequestError(`Role with name ${input.name} already exists`);
            for (const permissionId of input.permissionIds) {
                const existingPermission = yield services_1.permissionService.getPermission(permissionId);
                if (!existingPermission)
                    throw new libs_1.NotFoundError(`Permission with id ${permissionId} not found`);
            }
            const currentRolePermissions = yield services_1.rolePermissionService.getRolePermissionsByRoleId(id);
            yield Promise.all(currentRolePermissions.map((rolePermission) => services_1.rolePermissionService.deleteRolePermission(rolePermission.id)));
            yield Promise.all(input.permissionIds.map((permissionId) => services_1.rolePermissionService.createRolePermission(id, permissionId)));
            return yield services_1.roleService.updateRole(id, { name: input.name });
        });
    },
    deleteRole(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingRole = yield services_1.roleService.getRole(id);
            if (!existingRole)
                throw new libs_1.NotFoundError(`Role with id ${id} not found`);
            yield services_1.rolePermissionService.deleteRoleFromAllPermission(id);
            return yield services_1.roleService.deleteRole(id);
        });
    },
};

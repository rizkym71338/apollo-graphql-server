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
exports.rolePermissionService = void 0;
const libs_1 = require("../libs");
exports.rolePermissionService = {
    getRolePermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.findUnique({ where: { id } });
        });
    },
    getRolePermissionsByRoleId(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.findMany({ where: { roleId } });
        });
    },
    getRolePermissionsByPermissionId(permissionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.findMany({ where: { permissionId } });
        });
    },
    getPermissionsByRoleId(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission
                .findMany({ where: { roleId }, include: { permission: true }, orderBy: { permission: { createdAt: 'desc' } } })
                .then((rolePermissions) => rolePermissions.map(({ permission }) => permission));
        });
    },
    getRolesByPermissionId(permissionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission
                .findMany({ where: { permissionId }, include: { role: true }, orderBy: { role: { createdAt: 'desc' } } })
                .then((rolePermissions) => rolePermissions.map(({ role }) => role));
        });
    },
    createRolePermission(roleId, permissionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.create({ data: { roleId, permissionId } });
        });
    },
    deleteRolePermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.delete({ where: { id } });
        });
    },
    deletePermissionFromAllRole(permissionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.deleteMany({ where: { permissionId } });
        });
    },
    deleteRoleFromAllPermission(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.rolePermission.deleteMany({ where: { roleId } });
        });
    },
};

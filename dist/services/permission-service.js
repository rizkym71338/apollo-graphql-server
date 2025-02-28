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
exports.permissionService = void 0;
const libs_1 = require("../libs");
exports.permissionService = {
    getAllPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.findMany({ orderBy: { createdAt: 'desc' } });
        });
    },
    getPermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.findUnique({ where: { id } });
        });
    },
    getPermissionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.findFirst({ where: { name } });
        });
    },
    createPermission(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.create({ data });
        });
    },
    updatePermission(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.update({ where: { id }, data });
        });
    },
    deletePermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.permission.delete({ where: { id } });
        });
    },
};

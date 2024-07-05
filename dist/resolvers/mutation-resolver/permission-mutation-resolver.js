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
exports.permissionMutationResolver = void 0;
const services_1 = require("../../services");
const middlewares_1 = require("../../middlewares");
const libs_1 = require("../../libs");
exports.permissionMutationResolver = {
    createPermission(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingPermission = yield services_1.permissionService.getPermissionByName(input.name);
            if (existingPermission)
                throw new libs_1.BadRequestError(`Permission with name ${input.name} already exists`);
            return yield services_1.permissionService.createPermission(input);
        });
    },
    updatePermission(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingPermission = yield services_1.permissionService.getPermission(id);
            if (!existingPermission)
                throw new libs_1.NotFoundError(`Permission with id ${id} not found`);
            const permissionWithSameName = yield services_1.permissionService.getPermissionByName(input.name);
            if (permissionWithSameName && permissionWithSameName.id !== id)
                throw new libs_1.BadRequestError(`Permission with name ${input.name} already exists`);
            return yield services_1.permissionService.updatePermission(id, input);
        });
    },
    deletePermission(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingPermission = yield services_1.permissionService.getPermission(id);
            if (!existingPermission)
                throw new libs_1.NotFoundError(`Permission with id ${id} not found`);
            yield services_1.rolePermissionService.deletePermissionFromAllRole(id);
            return yield services_1.permissionService.deletePermission(id);
        });
    },
};

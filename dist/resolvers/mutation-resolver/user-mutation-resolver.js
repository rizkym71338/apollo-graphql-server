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
exports.userMutationResolver = void 0;
const middlewares_1 = require("../../middlewares");
const services_1 = require("../../services");
const libs_1 = require("../../libs");
exports.userMutationResolver = {
    createUser(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingUser = yield services_1.userService.getUserByEmail(input.email);
            if (existingUser)
                throw new libs_1.BadRequestError(`User with email ${input.email} already exists`);
            const existingRole = yield services_1.roleService.getRole(input.roleId);
            if (!existingRole)
                throw new libs_1.BadRequestError(`Role with id ${input.roleId} not found`);
            return yield services_1.userService.createUser(input);
        });
    },
    updateUser(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingUser = yield services_1.userService.getUser(id);
            if (!existingUser)
                throw new libs_1.BadRequestError(`User with id ${id} not found`);
            const existingRole = yield services_1.roleService.getRole(input.roleId);
            if (!existingRole)
                throw new libs_1.BadRequestError(`Role with id ${input.roleId} not found`);
            return yield services_1.userService.updateUser(id, input);
        });
    },
    deleteUser(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const existingUser = yield services_1.userService.getUser(id);
            if (!existingUser)
                throw new libs_1.BadRequestError(`User with id ${id} not found`);
            return yield services_1.userService.deleteUser(id);
        });
    },
};

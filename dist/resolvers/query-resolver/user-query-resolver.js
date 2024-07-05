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
exports.userQueryResolver = void 0;
const middlewares_1 = require("../../middlewares");
const services_1 = require("../../services");
const libs_1 = require("../../libs");
exports.userQueryResolver = {
    users(_1, __1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, __, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            return yield services_1.userService.getAllUser();
        });
    },
    user(_1, _a, _b) {
        return __awaiter(this, arguments, void 0, function* (_, { id }, { token }) {
            (0, middlewares_1.authenticationMiddleware)(token);
            const user = yield services_1.userService.getUser(id);
            if (!user)
                throw new libs_1.NotFoundError(`User with id ${id} not found`);
            return user;
        });
    },
};

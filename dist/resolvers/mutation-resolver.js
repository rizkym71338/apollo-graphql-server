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
exports.mutationResolver = void 0;
const services_1 = require("../services");
exports.mutationResolver = {
    createBook(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { input }) {
            return yield services_1.bookService.createBook(input);
        });
    },
    updateBook(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }) {
            return yield services_1.bookService.updateBook(id, input);
        });
    },
    deleteBook(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.bookService.deleteBook(id);
        });
    },
    createMember(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { input }) {
            return yield services_1.memberService.createMember(input);
        });
    },
    updateMember(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }) {
            return yield services_1.memberService.updateMember(id, input);
        });
    },
    deleteMember(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.memberService.deleteMember(id);
        });
    },
    createLending(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { input }) {
            return yield services_1.lendingService.createLending(input);
        });
    },
    updateLending(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id, input }) {
            return yield services_1.lendingService.updateLending(id, input);
        });
    },
    deleteLending(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.lendingService.deleteLending(id);
        });
    },
};

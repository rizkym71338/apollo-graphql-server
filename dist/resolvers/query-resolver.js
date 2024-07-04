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
exports.queryResolver = void 0;
const services_1 = require("../services");
exports.queryResolver = {
    books() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.bookService.getAllBook();
        });
    },
    book(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.bookService.getBook(id);
        });
    },
    members() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.memberService.getAllMember();
        });
    },
    member(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.memberService.getMember(id);
        });
    },
    lendings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.lendingService.getAllLending();
        });
    },
    lending(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            return yield services_1.lendingService.getLending(id);
        });
    },
};

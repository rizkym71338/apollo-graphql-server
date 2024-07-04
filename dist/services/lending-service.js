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
exports.lendingService = void 0;
const libs_1 = require("../libs");
exports.lendingService = {
    getAllLending() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.findMany({ orderBy: { id: 'desc' } });
        });
    },
    getLending(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.findUnique({ where: { id } });
        });
    },
    getLendingsByBookId(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.findMany({ where: { bookId }, orderBy: { id: 'desc' } });
        });
    },
    getLendingsByMemberId(memberId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.findMany({ where: { memberId }, orderBy: { id: 'desc' } });
        });
    },
    createLending(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.create({ data });
        });
    },
    updateLending(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.update({ where: { id }, data });
        });
    },
    deleteLending(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield libs_1.prisma.lending.delete({ where: { id } });
        });
    },
};
